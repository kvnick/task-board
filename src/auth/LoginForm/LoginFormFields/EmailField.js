import React from 'react';

import TextField from '../../../utils/FormFields/TextField';

const EmailField = props => {
    const fieldProps = {
        variant: 'outlined',
        margin: 'normal',
        required: true,
        fullWidth: true,
        id: 'email',
        label: 'Email Address',
        name: 'email',
        formControlProps: {
            fullWidth: true,
        },
        ...props,
    };

    return <TextField {...fieldProps} />;
};

export default EmailField;
