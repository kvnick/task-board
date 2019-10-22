import { takeLatest, call } from 'redux-saga/effects';
import { ActionTypes } from './actionTypes';
import * as BoardSagas from './sagas';

function* fetchTasksWatcher() {
  yield takeLatest(ActionTypes.TASKS_FETCH, fetchTasksInvoker);
}

function* fetchTasksInvoker() {
  yield call(BoardSagas.fetchTasks);
}

export const watchers = [
  fetchTasksWatcher
];