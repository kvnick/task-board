import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LoginFormContainer } from '../LoginForm';
import SnackBarError from '../../errors/SnackBarError';
import useStyles from './styles';

const LoginPage = (props) => {
    const {
        loading,
        error
    } = props;

    const classes = useStyles();

    return (
        <Container
            component="main"
            maxWidth="xs"
        >
            {!loading ? (
                <div className={classes.paper}>
                    <Typography
                        component="h1"
                        variant="h5"
                    >
                        Sign in
                    </Typography>

                    <LoginFormContainer />
                </div>
            ) : (
                <div className={classes.progressWrapper}>
                    <CircularProgress className={classes.progress} />
                </div>
            )}
            {
                error &&
                <SnackBarError error={error} />
            }
        </Container>
    )
};

export default LoginPage;
