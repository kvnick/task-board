import { string } from 'yup';

const TaskCommentValidation = string()
    .required('Task comment field is required')
    .min(4);

export default TaskCommentValidation;
