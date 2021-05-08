import React from 'react'
import TextField from '../../../../services/utils/FormFields/TextField'

const TaskDetailText = (props) => (
  <TextField
    label="Detail Text"
    name="detailText"
    multiline
    margin="normal"
    rows="4"
    {...props}
  />
)

export default TaskDetailText
