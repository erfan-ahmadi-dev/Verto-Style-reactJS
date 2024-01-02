import * as yup from "yup";
import Texts from "../utils/Constants";
export const loginSchema = yup.object().shape({
  username: yup.string().required(Texts.usernameRequired),
  password: yup.string().required(Texts.passRequired),
});

const phoneReg = "^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$";
export const checkoutSchema = yup.object().shape({
  firstName: yup.string(Texts.wrongInput).required(Texts.errorNameRequired),
  lastName: yup.string(Texts.wrongInput).required(Texts.errorLastNameRequired),
  phone: yup
    .string(Texts.wrongInput)
    .matches(phoneReg, Texts.wrongPhoneNum)
    .required(Texts.errorPhoneRequired),
  address: yup.string(Texts.wrongInput).required(Texts.errorAddressRequired),
  date: yup.string(Texts.wrongInput).required(Texts.errorDateRequired),
});
