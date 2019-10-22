import { ActionTypes } from './actionTypes';

export function setError(error) {
    console.log(error);
    return {
        type: ActionTypes.FORM_SET_ERROR,
        payload: error
    }
}

export function setLoading(loading) {
    return {
        type: ActionTypes.FORM_SET_LOADING,
        payload: loading
    }
}

export function setUser(user) {
    return {
        type: ActionTypes.SET_AUTH_USER,
        payload: user
    }
}

export function handleLogin(user, history) {
    return {
        type: ActionTypes.LOGIN,
        user,
        history
    }
}

export function handleLogout(history) {
    return {
        type: ActionTypes.LOGOUT,
        history
    }
}
