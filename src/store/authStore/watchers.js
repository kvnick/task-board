import { takeLatest, call } from "redux-saga/effects";

import { ActionTypes } from "./actionTypes";
import * as AuthSagas from "./sagas";

/**
 * Login invoker
 */
function* loginInvoker(action) {
    yield call(AuthSagas.handleLogin, action.user, action.history);
}

/**
 * Login watcher
 */
function* loginWatcher() {
    yield takeLatest(ActionTypes.LOGIN, loginInvoker);
}

/**
 * Logout logout invoker
 */
function* logoutInvoker(action) {
    yield call(AuthSagas.handleLogout, action.history);
}

/**
 * Logout watcher
 */
function* logoutWatcher() {
    yield takeLatest(ActionTypes.LOGOUT, logoutInvoker);
}

export const watchers = [loginWatcher, logoutWatcher];
