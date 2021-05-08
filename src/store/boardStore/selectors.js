import { createSelector } from 'reselect'

/**
 * Selector to get tasks from store
 * @param {ResultState} state
 */
export function tasks(state) {
  return state.boardStore.tasks
}

/**
 * Selector to get task statuses from store
 * @param {ResultState} state
 */
export function statuses(state) {
  return state.boardStore.statuses
}

/**
 * Selector to get history actions from store
 * @param {ResultState} state
 */
export function historyActions(state) {
  return state.boardStore.historyActions
}

/**
 * Selector to get task error from store
 * @param {ResultState} state
 */
export function error(state) {
  return state.boardStore.error
}

/**
 * Selector to get tasks loading state from store
 * @param {ResultState} state
 */
export function loading(state) {
  return state.boardStore.loading
}

/**
 * Selector to get current task from store
 * @param {ResultState} state
 */
export function task(state) {
  return state.boardStore.task
}

/**
 * Selector to get tasks grouped by statuses from store
 * @param {ResultState} state
 */
export const getTasksByStatuses = createSelector(
  tasks,
  statuses,
  (tasks, statuses) => {
    const initTasks = statuses.reduce(
      (tasks, status) => ({
        ...tasks,
        [status]: [],
      }),
      {},
    )

    // NOTE! app crashed if tasks without statuses
    return Object.entries(
      (tasks || []).reduce((tasks, task) => {
        const { status } = task
        tasks[status] = [...tasks[status], task]
        return tasks
      }, initTasks),
    )
  },
)
