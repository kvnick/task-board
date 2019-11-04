import { object } from 'yup';
import TaskNameValidation from './TaskNameValidation';

const taskFormSchema = object().shape({
    'name': TaskNameValidation
});

export default taskFormSchema;