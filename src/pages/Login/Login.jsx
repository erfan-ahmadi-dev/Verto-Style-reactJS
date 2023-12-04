import React from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../validation/Schema";
import logoPic from "../../assets/images/logoblack.svg";
import faTexts from "../../utils/Constants";
import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";
function Login() {
  const onSubmit = () => {};
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: loginSchema,
    onSubmit,
    validateOnChange: false,
  });
  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-[30%] bg-white rounded-lg shadow-2xl dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700  ">
            <div className=" flex flex-col gap-5 p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-center">
                <img src={logoPic} className="h-8" alt="" />
              </div>
              <form className="space-y-4 md:space-y-8" onSubmit={handleSubmit}>
                <div>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    label={faTexts.username}
                    lableVisibilty="true"
                    placeholder={faTexts.username}
                    className={
                      errors.username ? "loginErrorInput" : "InputStyle  "
                    }
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && (
                    <span className="errorStyleText">{errors.username}</span>
                  )}
                </div>
                <div>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    label={faTexts.passInput}
                    lableVisibilty="true"
                    placeholder={faTexts.passInput}
                    className={
                      errors.password && touched.password
                        ? "loginErrorInput"
                        : "InputStyle"
                    }
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <span className="errorStyleText">{errors.password}</span>
                  )}
                </div>

                <Button
                  type="submit"
                  className="mt-3"
                  disabled={isSubmitting}
                  label={faTexts.login}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
