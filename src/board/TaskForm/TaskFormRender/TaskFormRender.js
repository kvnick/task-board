import React, { useState } from 'react';
import { FormSpy } from 'react-final-form';

import MenuItem from '@material-ui/core/MenuItem';

import TextField from '../../../utils/FormFields/TextField';
import SelectField from '../../../utils/FormFields/SelectField';
import TaskFormButtons from '../TaskFormButtons/TaskFormButtons';
import useStyles from './styles';

const TaskFormRender = props => {
    const {
        onCancel,
        priorities,
        seriousness,
        validStatuses,
        ...formProps
    } = props;

    const classes = useStyles();
    const formControlProps = {
        fullWidth: true,
        className: classes.formControl
    };

    const disabled = formProps.submitting;

    return (
        <form
            onSubmit={formProps.handleSubmit}
            className={classes.form}
            autoComplete="off"
            noValidate
        >
            <TextField
                label="Name"
                name="name"
                formControlProps={formControlProps}
                margin="normal"
            />

            <TextField
                label="Preview Text"
                name="previewText"
                formControlProps={formControlProps}
                multiline
                rows="4"
            />

            <TextField
                label="Detail Text"
                name="detailText"
                formControlProps={formControlProps}
                multiline
                rows="4"
            />

            {formProps.initialValues && (<>
                <SelectField
                    label="Status"
                    name="status"
                    formControlProps={formControlProps}
                >
                    {validStatuses.map(validStatus => (
                        <MenuItem
                            key={validStatus}
                            disabled={validStatus === formProps.values.status}
                            value={validStatus}
                        >
                            {validStatus}
                        </MenuItem>
                    ))}
                </SelectField>

                <FormSpy
                    subscription={{
                        values: true,
                        initialValues: true
                    }}
                >
                    {formSpyProps => (
                        formSpyProps.values.status !== formSpyProps.initialValues.status && (
                            <TextField
                                label="Comment"
                                name="comment"
                                formControlProps={formControlProps}
                                multiline
                                rows="4"
                                margin="normal"
                            />
                        )
                    )}
                </FormSpy>
            </>)}

            <SelectField
                label="Priotiry"
                name="priority"
                formControlProps={formControlProps}
            >
                {priorities.map(item => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </SelectField>

            <SelectField
                label="Serious"
                name="serious"
                formControlProps={formControlProps}
            >
                {seriousness.map(item => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </SelectField>

            <TaskFormButtons
                submitButton={formProps.initialValues ? 'Update' : 'Create'}
                onCancel={onCancel}
                disabled={disabled || formProps.pristine}
                onSubmit={formProps.handleSubmit}
            />

            <pre>{JSON.stringify(formProps.values, 0, 2)}</pre>
        </form>
    );
};

export default TaskFormRender;
