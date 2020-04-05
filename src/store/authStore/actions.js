import { ActionTypes } from "./actionTypes";

export function setFormError(error) {
    return {
        type: ActionTypes.SET_FORM_ERROR,
        payload: error
    };
}

export function setFormLoading(loading) {
    return {
        type: ActionTypes.SET_FORM_LOADING,
        payload: loading
    };
}

export function setAuthUser(user) {
    return {
        type: ActionTypes.SET_AUTH_USER,
        payload: user
    };
}

export function handleLogin(user) {
    return {
        type: ActionTypes.LOGIN,
        user
    };
}

export function handleLogout() {
    return {
        type: ActionTypes.LOGOUT
    };
}
