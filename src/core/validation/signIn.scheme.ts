import * as yup from "yup";
export const validationSchemaSignIn = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{8,}$/,
      "Password must contain at least 8 characters with at least one uppercase and one lowercase letter",
    )
    .required("Password is required"),
});
