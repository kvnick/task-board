import React from "react";
import { Field } from "react-final-form";

import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const SelectFieldComponent = props => {
    const {
        input: { name, value, onChange, ...inputProps },
        label,
        meta,
        formControlProps,
        children,
        ...otherProps
    } = props;

    const showError =
        ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
        meta.touched;

    return (
        <FormControl {...formControlProps} error={showError}>
            <InputLabel htmlFor={name}>{label}</InputLabel>

            <Select
                onChange={onChange}
                name={name}
                value={value}
                inputProps={inputProps}
                {...otherProps}
            >
                {children}
            </Select>
        </FormControl>
    );
};

const SelectField = props => {
    const { name, label, items, ...otherProps } = props;

    return (
        <Field
            {...otherProps}
            name={name}
            items={items}
            component={SelectFieldComponent}
            label={label}
            inputProps={{
                id: name,
                name,
            }}
        ></Field>
    );
};

export default SelectField;
