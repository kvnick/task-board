import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles';
import { LoginFormContainer } from '../LoginForm';
import { ROUTES } from "../../utils/helpers";
import { withAuthUserContext } from "../../context";
import SnackBarError from '../../errors/SnackBarError';

const LoginPage = (props) => {
    const {
        classes,
        loading,
        error
    } = props;

    return (
        <Container
            component="main"
            maxWidth="xs"
        >
            {
                !loading
                    ?
                    <div className={classes.paper}>
                        <Typography
                            component="h1"
                            variant="h5"
                        >
                            Sign in
                        </Typography>

                        <LoginFormContainer />
                    </div>
                    :
                    <div className={classes.progressWrapper}>
                        <CircularProgress className={classes.progress} />
                    </div>
            }
            {
                error &&
                <SnackBarError error={error} />
            }
        </Container>
    )
};

export default compose(
    withStyles(styles),
    withRouter,
    withAuthUserContext,
)(LoginPage);
