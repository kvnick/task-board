import { createSelector } from 'reselect';

// selectors
export function tasks(state) {
  return state.boardReducer.tasks;
}

export function statuses(state) {
  return state.boardReducer.statuses;
}

export const prepareTasksByStatuses = createSelector(
  tasks,
  statuses,
  function(tasks, statuses) {
    const initTasks = statuses.reduce((tasks, status) => ({
      ...tasks,
      [status]: []
    }), {});

    // NOTE! app crashed if tasks without statuses
    return Object.entries(tasks.reduce((tasks, task) => {
      const { status } = task;
      tasks[status] = [...tasks[status], task];
      return tasks;
    }, initTasks));
  }
);