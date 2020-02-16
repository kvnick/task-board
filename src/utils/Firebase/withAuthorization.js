import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

import { firebaseAuth } from '../../services/FirebaseApp';
import { ROUTES } from '../../App';

const withAuthorization = Component => {
    const WithAuthorization = props => {
        const history = useHistory();
        useEffect(() => {
            const listener = firebaseAuth.onAuthStateChanged(authUser => {
                if (!authUser) {
                    history.push(ROUTES.LOGIN);
                }
            });

            return () => {
                listener();
            };
        }, [history]);

        return <Component {...props} />;
    };

    return WithAuthorization;
};

export default withAuthorization;
