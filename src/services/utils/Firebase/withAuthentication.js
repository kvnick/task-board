import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AuthActions } from "../../../store/authStore";
import { firebaseAuth } from "../../FirebaseApp";

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

    return connect(null, dispatch => ({
        updateUser: authUser => dispatch(AuthActions.setAuthUser(authUser))
    }))(WithAuthentication);
};

export default withAuthentication;
