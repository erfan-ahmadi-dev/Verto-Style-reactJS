import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "../../validation/Schema";
import logoPic from "../../assets/images/logoblack.svg";
import faTexts from "../../utils/Constants";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../api/defaultApi";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PATHS } from "../../configs/RoutesConfig";

function Login() {
  const [userData, setData] = useState(null);
  const navigate = useNavigate();
  const postAuthData = async (values) => {
    const response = await sendData("auth/login", values);
    return response;
  };
  const query = useQuery({
    queryKey: ["login", userData],
    queryFn: () => postAuthData(userData),
    enabled: !!userData,
  });
  useEffect(() => {
    if (!query.isPending && !query.isLoading) {
      if (query.data.status === 200) {
        localStorage.setItem("accessToken", query.data.data.token.accessToken);
        navigate(PATHS.DASHBOARD);
      } else if (query.data.status === 401) {
        toast.error("رمز و یا نام کاربری اشتباه است");
      } else {
        toast.error("خطا رخ داده است");
      }
    }
  }, [query.isLoading]);

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900 font-IranRegular">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-[30%] bg-white rounded-lg shadow-2xl dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700  ">
            <div className=" flex flex-col gap-5 p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className="flex justify-center">
                <img src={logoPic} className="h-8" alt="" />
              </div>

              <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  setData(values);
                  resetForm();
                  setSubmitting(false);
                  // navigate("/dashboard");
                }}
              >
                {({ isSubmitting }) => (
                  <Form className=" w-full flex flex-col justify-center items-center gap-8">
                    <div className="w-full">
                      <Field
                        type="text"
                        name="username"
                        className="InputStyle"
                        placeholder={faTexts.username}
                      />
                      <ErrorMessage
                        className="errorStyleText"
                        name="username"
                        component="div"
                      />
                    </div>
                    <div className="w-full">
                      <Field
                        type="password"
                        name="password"
                        className="InputStyle"
                        placeholder={faTexts.passInput}
                      />
                      <ErrorMessage
                        className="errorStyleText"
                        name="password"
                        component="div"
                      />
                    </div>

                    <button
                      className={
                        query.isLoading ? "disableButton" : "primaryButton"
                      }
                      disabled={query.isLoading ? true : false}
                    >
                      {faTexts.login}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
