import React from 'react';
import { Form } from 'react-final-form';
import { useHistory } from 'react-router';

import loginFormSchema from '../../utils/Validation/yup/LoginForm/loginFormSchema';
import { LoginFormRender } from './LoginFormRender';

const LoginForm = (props) => {
    const { onSubmit } = props;
    const history = useHistory();

    const subscription = {
        pristine: true,
        values: true
    };

    const validate = (values) => {
        if (Object.keys(values).length > 0) {
            const validate = loginFormSchema.validate(values);
        }
    };

    const handleSubmit = (values, formApi, callback) => {
        return onSubmit(values, history);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            subscription={subscription}
        // validate={validate}
        >
            {formProps => (
                <LoginFormRender
                    {...formProps}
                />
            )}
        </Form>
    );
};

export default LoginForm;