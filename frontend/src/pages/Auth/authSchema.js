import * as yup from "yup";

export const loginSchema = yup
  .object({
    username: yup.string().email().required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Must Contain 8 Characters, One letter, One Number, One Number and one special case Character"
      ),
  })
  .required();