import { object } from "yup";

import EmailFieldValidation from "./EmailFieldValidation";
import PasswordFieldValidation from "./PasswordFieldValidation";

const loginFormSchema = object().shape({
    email: EmailFieldValidation,
    password: PasswordFieldValidation,
});

export default loginFormSchema;
