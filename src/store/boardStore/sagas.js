import { put, call, select } from 'redux-saga/effects'

import * as firebaseApi from '../../services/FirebaseApp'
import * as BoardActions from './actions'
import * as BoardSelectors from './selectors'
import { AuthSelectors } from '../authStore'
import { NotifierActions } from '../notifierStore'
import history from '../../services/utils/customHistory'
import { normalizedRoutes } from '../../router/routes'

/**
 * Saga to fetch tasks from api and set them to store
 */
export function* fetchTasks() {
  yield put(BoardActions.setLoading(true))
  try {
    const ref = yield call(firebaseApi.tasks)
    const response = yield call([ref, ref.once], 'value')

    const responseTasks = response.val()
    const tasks = Object.keys(responseTasks).map((key) => ({
      ...responseTasks[key],
      id: key,
    }))

    yield put(BoardActions.setTasks(tasks))
  } catch (error) {
    yield put(
      NotifierActions.enqueueSnackbar({
        message: error,
      }),
    )
  } finally {
    yield put(BoardActions.setLoading(false))
  }
}

/**
 * Saga to fetch task from api and set it to store
 * @param {number} id
 */
export function* fetchTask(id) {
  yield put(BoardActions.setLoading(true))
  try {
    const ref = yield call(firebaseApi.task, id)
    const snapshot = yield call([ref, ref.once], 'value')

    if (!snapshot.exists()) {
      throw Error(`Task with id: ${id} not found`)
    }

    const task = {
      ...snapshot.val(),
      id: snapshot.key,
    }

    yield put(BoardActions.setTask(task))
  } catch (error) {
    yield put(
      NotifierActions.enqueueSnackbar({
        message: error.toString(),
      }),
    )
    history.push(normalizedRoutes.tasks)
  } finally {
    yield put(BoardActions.setLoading(false))
  }
}

/**
 * Saga to create task by api call and
 * redirect to newly created task
 * @param {object} taskModel
 */
export function* createTask(taskModel) {
  yield put(BoardActions.setLoading(true))
  try {
    const authUser = yield select(AuthSelectors.authUser)
    const task = {
      ...taskModel,
      createdDate: new Date().toString(),
      status: 'new',
      user: authUser.email,
    }
    const ref = firebaseApi.tasks()
    const response = yield call([ref, ref.push], { ...task })

    history.push(normalizedRoutes.taskDetail.replace(':id', response.key))
  } catch (error) {
    yield put(
      NotifierActions.enqueueSnackbar({
        message: `Error when creating task ${error.toString()}`,
      }),
    )
  } finally {
    yield put(BoardActions.setLoading(false))
  }
}

/**
 * Saga to update task by api call with initial task history,
 * update store and redirect to task page
 * @param {object} taskModel
 */
export function* updateTask(taskModel) {
  yield put(BoardActions.setLoading(true))
  try {
    const { id, comment, ...task } = taskModel
    const ref = firebaseApi.task(id)
    yield call([ref, ref.set], task)
    const historyActions = yield select(BoardSelectors.historyActions)

    if (comment && comment !== '') {
      const historyData = {
        comment: comment,
        date: new Date().toString(),
        action: historyActions[task.status],
      }
      yield call(createTaskHistory, id, historyData)
    }

    yield put(BoardActions.setTask({ ...task, id }))
    history.push(normalizedRoutes.tasks)
  } catch (error) {
    yield put(
      NotifierActions.enqueueSnackbar({
        message: `Error when update task ${error.toString()}`,
      }),
    )
  } finally {
    yield put(BoardActions.setLoading(false))
  }
}

/**
 * Saga to create task history by api call
 * @param {number} taskId
 * @param {object} taskHistoryModel
 */
export function* createTaskHistory(taskId, taskHistoryModel) {
  try {
    const authUser = yield select(AuthSelectors.authUser)
    const taskHistory = {
      ...taskHistoryModel,
      user: authUser.email,
    }
    const ref = firebaseApi.taskHistory(taskId)
    yield call([ref, ref.push], taskHistory)
  } catch (error) {
    yield put(
      NotifierActions.enqueueSnackbar({
        message: `Error when create task history ${error.toString()}`,
      }),
    )
  } finally {
    yield put(BoardActions.setLoading(false))
  }
}

/**
 * Saga to delete task by api call and redirect to tasks page
 * @param {number} id
 */
export function* deleteTask(id) {
  yield put(BoardActions.setLoading(true))
  try {
    const ref = firebaseApi.task(id)
    yield call([ref, ref.remove])
    history.push(normalizedRoutes.tasks)
  } catch (error) {
    yield put(
      NotifierActions.enqueueSnackbar({
        message: `Error when remove task ${error.toString()}`,
      }),
    )
  } finally {
    yield put(BoardActions.setLoading(false))
  }
}
