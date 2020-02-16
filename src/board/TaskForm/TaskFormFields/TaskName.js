import React from 'react';
import TextField from '../../../utils/FormFields/TextField';

const TaskName = props => (
    <TextField name="name" label="Name" margin="normal" {...props} />
);

export default TaskName;
