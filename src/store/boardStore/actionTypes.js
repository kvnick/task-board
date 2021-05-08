/**
 * This file describe action types for boar store
 *
 * Action types start with SET keyword means that action
 * set data to store with payload
 *
 * Otherwise this mean that we listen this action types
 */
export const ActionTypes = {
  SET_TASKS_LOADING: 'BOARD__SET_TASKS_LOADING',
  SET_TASKS: 'BOARD__SET_TASKS',
  SET_TASK: 'BOARD__SET_TASK',
  /**
   * =================================================
   * Below this comment put "listening" action types
   * =================================================
   */
  FETCH_TASKS: 'BOARD__FETCH_TASKS',
  FETCH_TASK: 'BOARD__FETCH_TASK',
  TASK_CREATE: 'BOARD__TASK_CREATE',
  TASK_UPDATE: 'BOARD__TASK_UPDATE',
  TASK_DELETE: 'BOARD__TASK_DELETE',
}
