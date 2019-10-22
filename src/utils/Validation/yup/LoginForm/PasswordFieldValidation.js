import { string } from 'yup';

const PasswordFieldValidation = string()
    .required('Password field is required')
    .min(6);

export default PasswordFieldValidation;