import React from "react";
import TextField from "../../../services/utils/FormFields/TextField";

const TaskName = props => (
    <TextField name="name" label="Name" margin="normal" {...props} />
);

export default TaskName;
