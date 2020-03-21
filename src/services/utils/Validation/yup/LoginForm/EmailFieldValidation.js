import { string } from "yup";

const EmailFieldValidation = string()
    .required("Email field is required")
    .email("Email field should be valid email");

export default EmailFieldValidation;
