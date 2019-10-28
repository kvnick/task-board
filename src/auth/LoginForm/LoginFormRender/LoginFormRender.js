import React from 'react';

import Button from '@material-ui/core/Button';

import EmailField from '../LoginFormFields/EmailField';
import PasswordField from '../LoginFormFields/PasswordField';
import useStyles from './styles';

const LoginFormRender = props => {
    const classes = useStyles();
    const isSubmitButtonDisabled = props.submitting || props.pristine;

    return (
        <form
            onSubmit={props.handleSubmit}
            className={classes.form}
            noValidate
            autoComplete="off"
        >
            <EmailField autoFocus />

            <PasswordField />

            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitButtonDisabled}
            >
                Sign In
            </Button>
        </form>
    );
};

export default LoginFormRender;
