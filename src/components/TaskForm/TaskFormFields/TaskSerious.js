import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import SelectField from "../../../services/utils/FormFields/SelectField";

const TaskSerious = props => {
    const { seriousness, ...otherProps } = props;

    const items = seriousness.map(x => {
        return {
            key: x,
            value: x,
            text: x,
            disabled: false,
        };
    });

    return (
        <SelectField label="Serious" name="serious" {...otherProps}>
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

export default TaskSerious;
