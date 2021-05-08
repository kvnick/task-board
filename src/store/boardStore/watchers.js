import { takeLatest, call } from 'redux-saga/effects'
import { ActionTypes } from './actionTypes'
import * as BoardSagas from './sagas'

/**
 * Fetch tasks invoker
 */
function* fetchTasksInvoker() {
  yield call(BoardSagas.fetchTasks)
}

/**
 * Fetch tasks watcher
 */
function* fetchTasksWatcher() {
  yield takeLatest(ActionTypes.FETCH_TASKS, fetchTasksInvoker)
}

/**
 * Fetch current task invoker
 */
function* fetchTaskInvoker(action) {
  yield call(BoardSagas.fetchTask, action.id)
}

/**
 * Fetch current task watcher
 */
function* fetchTaskWatcher() {
  yield takeLatest(ActionTypes.FETCH_TASK, fetchTaskInvoker)
}

/**
 * Create task invoker
 */
function* createTaskInvoker(action) {
  yield call(BoardSagas.createTask, action.task)
}

/**
 * Create task watcher
 */
function* createTaskWatcher() {
  yield takeLatest(ActionTypes.TASK_CREATE, createTaskInvoker)
}

/**
 * Update task invoker
 */
function* updateTaskInvoker(action) {
  yield call(BoardSagas.updateTask, action.id, action.task)
}

/**
 * Update task watcher
 */
function* updateTaskWatcher() {
  yield takeLatest(ActionTypes.TASK_UPDATE, updateTaskInvoker)
}

/**
 * Delete task invoker
 */
function* deleteTaskInvoker(action) {
  yield call(BoardSagas.deleteTask, action.id)
}

/**
 * Delete task watcher
 */
function* deleteTaskWatcher() {
  yield takeLatest(ActionTypes.TASK_DELETE, deleteTaskInvoker)
}

export const watchers = [
  fetchTasksWatcher,
  createTaskWatcher,
  fetchTaskWatcher,
  updateTaskWatcher,
  deleteTaskWatcher,
]
