import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import SelectField from '../../../utils/FormFields/SelectField';

const TaskPriority = props => {
    const { priorities, ...otherProps } = props;

    const items = priorities.map(x => {
        return {
            key: x,
            value: x,
            text: x,
            disabled: false,
        };
    });

    return (
        <SelectField label="Priotiry" name="priority" {...otherProps}>
            {items.map(item => (
                <MenuItem
                    key={item.key}
                    value={item.value}
                    disabled={item.disabled}
                >
                    {item.text}
                </MenuItem>
            ))}
        </SelectField>
    );
};

export default TaskPriority;
