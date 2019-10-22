import { put, call } from 'redux-saga/effects';

import * as BoardActions from './actions';
import * as BoardApi from './api';

export function* fetchTasks() {
  yield put(BoardActions.setLoading(true));
  try {
    const response = yield call(BoardApi.getTasks);
    const tasks = prepareTasks(response);

    yield put(BoardActions.setTasks(tasks));
  } catch (error) {
    yield put(BoardActions.setError(error));
  } finally {
    yield put(BoardActions.setLoading(false));
  }
}

export function* handleEditTask(id, task) {
  yield put(BoardActions.setLoading(true));
  try {
    const task = call(BoardApi.getTask(id));
    // do edit with task
  } catch (error) {
    yield put(BoardActions.setError(error));
  } finally {
    yield put(BoardActions.setLoading(false));
  }
}

function prepareTasks(tasks) {
  return Object.keys(tasks).map(key => ({
    ...tasks[key],
    id: key,
  }));
}
