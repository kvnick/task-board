import { put, call } from 'redux-saga/effects';
import * as AuthActions from './actions';
import * as firebaseApi from '../../services/FirebaseApp';
import { ROUTES } from '../../App';

/**
  @param data Object like { email: '', password: '' }
  @param history Object @see useHistory from react-router package
 */
export function* handleLogin(data, history) {
    yield put(AuthActions.setLoading(true));
    try {
        const response = yield call(firebaseApi.doSignInWithEmailAndPassword, data.email, data.password);
        yield history.push(ROUTES.HOME);
    } catch (error) {
        yield put(AuthActions.setError(prepareFirebaseError(error)));
    } finally {
        yield put(AuthActions.setLoading(false));
    }
}

export function* handleLogout(history) {
    try {
        yield call(firebaseApi.handleSignOut);
        yield history.push(ROUTES.LOGIN);
    } catch (error) {
    } finally {
    }
}

function prepareFirebaseError(error) {
    let errorCode = error;
    if (typeof error === 'object') {
        errorCode = error.code;
    }

    let errors = {
        'auth/wrong-password': 'Wrong credentials'
    };

    if (Object.keys(errors).indexOf(errorCode) !== -1) {
        return errors[errorCode];
    }
    return error;
};