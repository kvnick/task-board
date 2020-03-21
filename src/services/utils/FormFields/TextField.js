import React from "react";
import { Field } from "react-final-form";

import TextFieldMaterial from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const TextFieldComponent = props => {
    const {
        input: { name, value, onChange, ...inputProps },
        meta,
        label,
        formControlProps,
        ...otherProps
    } = props;

    const showError =
        ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
        meta.touched;

    return (
        <FormControl {...formControlProps}>
            <TextFieldMaterial
                helperText={
                    showError ? meta.error || meta.submitError : undefined
                }
                error={showError}
                onChange={onChange}
                inputProps={inputProps}
                value={value}
                label={label}
                {...otherProps}
            />
        </FormControl>
    );
};

const TextField = props => {
    const { name, required, disabled, ...otherProps } = props;

    return (
        <Field
            {...otherProps}
            required={required}
            disabled={disabled}
            name={name}
            component={TextFieldComponent}
        />
    );
};

export default TextField;
