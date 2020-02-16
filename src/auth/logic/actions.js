import { ActionTypes } from './actionTypes';

export function setError(error) {
    return {
        type: ActionTypes.FORM_SET_ERROR,
        payload: error,
    };
}

export function setLoading(loading) {
    return {
        type: ActionTypes.FORM_SET_LOADING,
        payload: loading,
    };
}

export function setUser(user) {
    return {
        type: ActionTypes.SET_AUTH_USER,
        payload: user,
    };
}

export function handleLogin(user) {
    return {
        type: ActionTypes.LOGIN,
        user,
    };
}

export function handleLogout() {
    return {
        type: ActionTypes.LOGOUT,
    };
}
