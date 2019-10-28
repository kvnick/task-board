import { put, call, select } from 'redux-saga/effects';

import * as BoardActions from './actions';
import * as BoardSelectors from './selectors';
import { AuthSelectors } from './../../auth/logic';
import * as firebaseApi from '../../services/FirebaseApp';

export function* fetchTasks() {
    yield put(BoardActions.setLoading(true));
    try {
        const ref = yield call(firebaseApi.tasks);
        const response = yield call([ref, ref.once], 'value');
        const tasks = prepareTasks(response.val());
        yield put(BoardActions.setTasks(tasks));
    } catch (error) {
        yield put(BoardActions.setError(error));
    } finally {
        yield put(BoardActions.setLoading(false));
    }
}

export function* fetchTask(id) {
    yield put(BoardActions.setLoading(true));
    try {
        const ref = yield call(firebaseApi.task, id);
        const snapshot = yield call([ref, ref.once], 'value');
        const task = {
            ...snapshot.val(),
            id: snapshot.key
        };

        yield put(BoardActions.setTask(task));
    } catch(error) {
        yield put(BoardActions.setError(error));
    } finally {
        yield put(BoardActions.setLoading(false));
    }
}

export function* createTask(taskModel) {
    yield put(BoardActions.setLoading(true));
    try {
        const authUser = yield select(AuthSelectors.authUser);
        const task = {
            ...taskModel,
            createdDate: (new Date()).toString(),
            status: 'new',
            user: authUser.email
        };
        const ref = firebaseApi.tasks();
        const response = yield call([ref, ref.push], { ...task });
        // redirect to tasks list
    } catch(error) {
        yield put(BoardActions.setError(error));
    } finally {
        yield put(BoardActions.setLoading(false));
    }
}

export function* updateTask(taskModel) {
    yield put(BoardActions.setLoading(true));
    try {
        const { id, comment, ...task } = taskModel;
        const ref = firebaseApi.task(id);
        const response = yield call([ref, ref.set], task);
        const historyActions = yield select(BoardSelectors.historyActions);

        if (comment && comment !== '') {
            const historyData = {
                comment: comment,
                date: (new Date()).toString(),
                action: historyActions[task.status],
            };
            yield call(createTaskHistory, id, historyData);
        }
        // redirect to tasks list
    } catch (error) {
        yield put(BoardActions.setError(error));
    } finally {
        yield put(BoardActions.setLoading(false));
    }
}

export function* createTaskHistory(taskId, taskHistoryModel) {
    try {
        const authUser = yield select(AuthSelectors.authUser);
        const taskHistory = {
            ...taskHistoryModel,
            user: authUser.email
        };
        const ref = firebaseApi.taskHistory(taskId);
        const response = yield call([ref, ref.push], taskHistory);
    } catch (error) {
        yield put(BoardActions.setError(error));
    } finally {
        yield put(BoardActions.setLoading(false));
    }
}

export function* deleteTask(id) {
    try {
        const ref = firebaseApi.task(id);
        const response = yield call([ref, ref.remove]);
        // redirect to tasks page
    } catch(error) {
        yield put(BoardActions.setError(error));
    } finally {
        yield put(BoardActions.setLoading(false));
    }
}

function prepareTasks(tasks) {
    return Object.keys(tasks).map(key => ({
        ...tasks[key],
        id: key
    }));
}
