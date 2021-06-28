import * as Yup from "yup";
import TextInput from "../../../components/TextInput";

export const fields = [
  {
    name: "email",
    component: TextInput,
    placeholder: "Email",
    label: "Email",
    value: "",
  },
  {
    name: "password",
    component: TextInput,
    type: "password",
    placeholder: "Password",
    label: "Password",
    value: "",
  },
];

export const initialValues = fields.reduce((p, c) => {
  return { ...p, [c.name]: c.name };
}, {});

export const loginSchema = Yup.object().shape({
  email: Yup.string().min(3).max(255).required().email(),
  password: Yup.string()
    .required()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),
});
