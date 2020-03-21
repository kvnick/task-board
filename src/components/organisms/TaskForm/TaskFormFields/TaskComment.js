import React from "react";
import TextField from "../../../../services/utils/FormFields/TextField";

const TaskComment = props => (
    <TextField
        label="Comment"
        name="comment"
        multiline
        rows="4"
        margin="normal"
        {...props}
    />
);

export default TaskComment;
