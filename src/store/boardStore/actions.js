import { ActionTypes } from "./actionTypes";

/**
 * Action creator to set tasks loading status to store
 * @param {boolean} loading
 * @return {object} Action object with payload
 */
export function setLoading(loading) {
    return {
        type: ActionTypes.SET_TASKS_LOADING,
        payload: loading
    };
}

/**
 * Action creator to set tasks to store
 * @param {array} tasks
 * @return {object} Action object with payload
 */
export function setTasks(tasks) {
    return {
        type: ActionTypes.SET_TASKS,
        payload: tasks
    };
}

/**
 * Action creator to set task to store
 * @param {object} task
 * @return {object} Action object with payload
 */
export function setTask(task) {
    return {
        type: ActionTypes.SET_TASK,
        payload: task
    };
}

/**
 * Action creator to call fetch tasks
 * @return {object} Action object with payload
 */
export function fetchTasks() {
    return {
        type: ActionTypes.FETCH_TASKS
    };
}

/**
 * Action creator to call fetch task
 * @return {object} Action object with payload
 */
export function fetchTask(id) {
    return {
        type: ActionTypes.FETCH_TASK,
        id
    };
}

/**
 * Action creator to call create task
 * @return {object} Action object with payload
 */
export function createTask(task) {
    return {
        type: ActionTypes.TASK_CREATE,
        task
    };
}

/**
 * Action creator to call update task
 * @param {number} id
 * @param {object} task
 * @return {object} Action object with payload
 */
export function updateTask(id, task) {
    return {
        type: ActionTypes.TASK_UPDATE,
        id,
        task
    };
}

/**
 * Action creator to call delete task
 * @param {number} id
 * @return {object} Action object with payload
 */
export function deleteTask(id) {
    return {
        type: ActionTypes.TASK_DELETE,
        id
    };
}
