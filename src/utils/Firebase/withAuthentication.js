import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AuthActions } from '../../auth/logic';
import { firebaseAuth } from '../../services/FirebaseApp';

export const withAuthentication = Component => {
    const WithAuthentication = props => {
        useEffect(() => {
            const listener = firebaseAuth.onAuthStateChanged(props.updateUser);
            return () => {
                listener();
            };
        }, [props.updateUser]);

        return <Component {...props} />;
    };

    return connect(
        null,
        dispatch => ({
            updateUser: authUser => dispatch(AuthActions.setUser(authUser)),
        })
    )(WithAuthentication);
};

export default withAuthentication;
