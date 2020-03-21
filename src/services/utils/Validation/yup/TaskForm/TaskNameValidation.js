import { string } from "yup";

const TaskNameValidation = string()
    .required("Task name field is required")
    .min(4);

export default TaskNameValidation;
