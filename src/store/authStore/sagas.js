import { put, call } from "redux-saga/effects";

import * as firebaseApi from "../../services/FirebaseApp";
import history from "../../services/utils/customHistory";
import { normalizedRoutes } from "../../router";
import * as AuthActions from "./actions";

/**
 * Saga to authorize user
 * @param {UserData} data Object like { email: '', password: '' }
 */
export function* handleLogin(data) {
    yield put(AuthActions.setFormLoading(true));
    try {
        yield call(
            firebaseApi.doSignInWithEmailAndPassword,
            data.email,
            data.password
        );
        yield history.push(normalizedRoutes.home);
    } catch (error) {
        yield put(AuthActions.setFormError(prepareFirebaseError(error)));
    } finally {
        yield put(AuthActions.setFormLoading(false));
    }
}

export function* handleLogout() {
    try {
        yield call(firebaseApi.handleSignOut);
        yield history.push(normalizedRoutes.login);
    } catch (error) {
    } finally {
    }
}

function prepareFirebaseError(error) {
    let errorCode = error;
    if (typeof error === "object") {
        errorCode = error.code;
    }

    let errors = {
        "auth/wrong-password": "Wrong credentials"
    };

    if (Object.keys(errors).indexOf(errorCode) !== -1) {
        return errors[errorCode];
    }
    return error;
}
