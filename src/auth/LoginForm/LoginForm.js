import React, { useCallback } from 'react';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router';

import loginFormSchema from '../../utils/Validation/yup/LoginForm/loginFormSchema';
import { LoginFormRender } from './LoginFormRender';
import getFinalFormValidation from '../../utils/Validation/yup/getFinalFormValidation';

const LoginForm = ({ onSubmit }) => {
    const history = useHistory();

    const subscription = {
        pristine: true,
        values: true,
    };

    const handleSubmit = useCallback(
        (values, formApi, callback) => onSubmit(values, history),
        [onSubmit, history]
    );

    return (
        <Form
            onSubmit={handleSubmit}
            subscription={subscription}
            validate={getFinalFormValidation(loginFormSchema, {
                abortEarly: false,
            })}
        >
            {formProps => <LoginFormRender {...formProps} />}
        </Form>
    );
};

export default LoginForm;
