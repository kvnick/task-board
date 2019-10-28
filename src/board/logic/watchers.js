import { takeLatest, call } from 'redux-saga/effects';
import { ActionTypes } from './actionTypes';
import * as BoardSagas from './sagas';

function* fetchTasksWatcher() {
    yield takeLatest(ActionTypes.FETCH_TASKS, fetchTasksInvoker);
}

function* fetchTasksInvoker() {
    yield call(BoardSagas.fetchTasks);
}

function* createTaskWatcher() {
    yield takeLatest(ActionTypes.TASK_CREATE, createTaskInvoker);
}

function* createTaskInvoker(action) {
    yield call(BoardSagas.createTask, action.task);
}

function* fetchTaskWatcher() {
    yield takeLatest(ActionTypes.FETCH_TASK, fetchTaskInvoker);
}

function* fetchTaskInvoker(action) {
    yield call(BoardSagas.fetchTask, action.id);
}

function* updateTaskWatcher() {
    yield takeLatest(ActionTypes.TASK_UPDATE, updateTaskInvoker);
}

function* updateTaskInvoker(action) {
    yield call(BoardSagas.updateTask, action.id, action.task);
}

function* deleteTaskWatcher() {
    yield takeLatest(ActionTypes.TASK_DELETE, deleteTaskInvoker);
}

function* deleteTaskInvoker(action) {
    yield call(BoardSagas.deleteTask, action.id);
}

export const watchers = [
    fetchTasksWatcher,
    createTaskWatcher,
    fetchTaskWatcher,
    updateTaskWatcher,
    deleteTaskWatcher
];
