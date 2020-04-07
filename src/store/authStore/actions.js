import { ActionTypes } from "./actionTypes";

/**
 * Action creator to set form loading state to store
 * @param {boolean} loadnig
 * @return {object} Action object with payload
 */
export function setFormLoading(loading) {
    return {
        type: ActionTypes.SET_FORM_LOADING,
        payload: loading
    };
}

/**
 * Action creator to set authorized user to store
 * @param {object} error
 * @return {object} Action object with payload
 */
export function setAuthUser(user) {
    return {
        type: ActionTypes.SET_AUTH_USER,
        payload: user
    };
}

/**
 * Action creator to handle user login
 * @param {object} user - User object to login
 * @return {object} Action object with payload
 */
export function handleLogin(user) {
    return {
        type: ActionTypes.LOGIN,
        user
    };
}

/**
 * Action creator to log user out
 * @return {object} Action object with payload
 */
export function handleLogout() {
    return {
        type: ActionTypes.LOGOUT
    };
}
