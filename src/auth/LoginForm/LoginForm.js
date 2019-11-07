import React from 'react';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router';

import loginFormSchema from '../../utils/Validation/yup/LoginForm/loginFormSchema';
import { LoginFormRender } from './LoginFormRender';
import getValidation from '../../utils/Validation/yup/getValidation';

const LoginForm = props => {
    const { onSubmit } = props;
    const history = useHistory();

    const subscription = {
        pristine: true,
        values: true,
    };

    const handleSubmit = (values, formApi, callback) => {
        return onSubmit(values, history);
    };

    const validate = getValidation(loginFormSchema, { abortEarly: false });

    return (
        <Form
            onSubmit={handleSubmit}
            subscription={subscription}
            validate={validate}
        >
            {formProps => <LoginFormRender {...formProps} />}
        </Form>
    );
};

export default LoginForm;
