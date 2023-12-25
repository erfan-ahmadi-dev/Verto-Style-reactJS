import * as yup from "yup";
import Texts from "../utils/Constants";
export const loginSchema = yup.object().shape({
  username: yup.string().required(Texts.usernameRequired),
  password: yup.string().required(Texts.passRequired),
});

export const checkoutSchema = yup.object().shape({
  firstName: yup.string(Texts.wrongInput).required(Texts.errorNameRequired),
  lastName: yup.string(Texts.wrongInput).required(Texts.errorLastNameRequired),
  phone: yup.number(Texts.wrongInput).required(Texts.errorPhoneRequired),
  address: yup.string(Texts.wrongInput).required(Texts.errorAddressRequired),
  date: yup.string(Texts.wrongInput).required(Texts.errorDateRequired),
});
