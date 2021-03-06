import React from 'react'
import TextField from '../../../../services/utils/FormFields/TextField'

const TaskPreviewText = (props) => (
  <TextField
    label="Preview Text"
    name="previewText"
    multiline
    rows="4"
    {...props}
  />
)

export default TaskPreviewText
