import { ActionTypes } from './actionTypes';

export function fetchTasks() {
    return {
        type: ActionTypes.FETCH_TASKS,
    };
}

export function fetchTask(id) {
    return {
        type: ActionTypes.FETCH_TASK,
        id,
    };
}

export function setLoading(loading) {
    return {
        type: ActionTypes.TASKS_LOADING,
        payload: loading,
    };
}

export function setTasks(tasks) {
    return {
        type: ActionTypes.SET_TASKS,
        payload: tasks,
    };
}

export function setTask(task) {
    return {
        type: ActionTypes.SET_TASK,
        payload: task,
    };
}

export function setError(error) {
    return {
        type: ActionTypes.TASKS_SET_ERROR,
        payload: error,
    };
}

export function createTask(task) {
    return {
        type: ActionTypes.TASK_CREATE,
        task,
    };
}

export function updateTask(id, task) {
    return {
        type: ActionTypes.TASK_UPDATE,
        id,
        task,
    };
}

export function deleteTask(id) {
    return {
        type: ActionTypes.TASK_DELETE,
        id,
    };
}
