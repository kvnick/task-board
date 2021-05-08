import { string } from 'yup'

const TaskCommentValidation = string().when(
  '$statusChanged',
  (statusChanged, schema) => {
    if (statusChanged) {
      return schema.required('Task comment field is required').min(4)
    }
    return schema
  },
)

export default TaskCommentValidation
