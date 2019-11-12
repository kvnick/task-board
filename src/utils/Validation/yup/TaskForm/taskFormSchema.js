import { object } from 'yup';
import TaskNameValidation from './TaskNameValidation';
import TaskCommentValidation from './TaskCommentValidation';

const taskFormSchema = object().shape({
    name: TaskNameValidation
});

export default taskFormSchema;
