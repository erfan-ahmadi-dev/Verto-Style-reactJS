import * as yup from "yup";
import Texts from "../utils/Constants";
export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, Texts.minUserName)
    .required(Texts.usernameRequired),
  password: yup.string().required(Texts.passRequired),
});
