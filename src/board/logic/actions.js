import { ActionTypes } from './actionTypes';

export function fetchTasks() {
  return {
    type: ActionTypes.TASKS_FETCH
  }
}

export function setLoading(loading) {
  return {
    type: ActionTypes.TASKS_LOADING,
    payload: loading
  }
}

export function setTasks(tasks) {
  return {
    type: ActionTypes.TASKS_SET,
    payload: tasks
  }
}

export function setError(error) {
  return {
    type: ActionTypes.TASKS_SET_ERROR,
    payload: error
  }
}
