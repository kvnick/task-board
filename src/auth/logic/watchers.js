import { takeLatest, call } from 'redux-saga/effects';
import { ActionTypes } from './actionTypes';
import * as AuthSagas from "./sagas";

function* loginWatcher() {
    yield takeLatest(ActionTypes.LOGIN, loginInvoker);
}

function* loginInvoker(action) {
    yield call(AuthSagas.handleLogin, action.user, action.history);
}

function* logoutWatcher() {
    yield takeLatest(ActionTypes.LOGOUT, logoutInvoker);
}

function* logoutInvoker(action) {
    yield call(AuthSagas.handleLogout, action.history);
}

export const watchers = [
    loginWatcher,
    logoutWatcher
];