import React, { useState } from "react";

import faTexts from "../../utils/Constants";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { checkoutSchema } from "../../validation/Schema";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/red.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addBillDetail } from "../../Redux/cart/CartSlice";
import { PATHS } from "../../configs/RoutesConfig";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const [dateValue, setDate] = useState();
  const cartState = useSelector((state) => state.cart);
  const cartDispatch = useDispatch();
  const navigate = useNavigate();
  const handleDateChange = (newValue, { setFieldValue }) => {
    const selectedDate = new Date(newValue);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      toast.error(faTexts.incorrectDate);
    } else {
      setDate(selectedDate.toISOString());
      setFieldValue("date", selectedDate.toISOString());
    }
  };
  return (
    <div className="font-IranRegular h-screen flex flex-col justify-center items-center gap-10">
      <h3 className="text-xl">{faTexts.confirmOrder}</h3>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          phone: "",
          date: "",
        }}
        validationSchema={checkoutSchema}
        onSubmit={(values) => {
          const newBill = {
            total: cartState.bill[0].total,
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
            phone: values.phone,
            date: values.date,
          };
          cartDispatch(addBillDetail(newBill));

          navigate(PATHS.PAYMENT);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="w-1/2 flex flex-col items-center gap-10">
            <div className="w-full grid grid-cols-2 gap-5 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName">{faTexts.firstName}</label>
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="editInput"
                />
                <ErrorMessage
                  className="errorStyleText"
                  name="firstName"
                  component="div"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName">{faTexts.lastName} </label>
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="editInput"
                />
                <ErrorMessage
                  className="errorStyleText"
                  name="lastName"
                  component="div"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="address">{faTexts.address}</label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  className="editInput"
                />
                <ErrorMessage
                  className="errorStyleText"
                  name="address"
                  component="div"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="flex gap-2 items-center">
                  <span>{faTexts.phone} </span>
                  <span className="text-sm text-gray-400">
                    {faTexts.phoneFor}
                  </span>
                </label>
                <Field type="text" name="phone" className="editInput" />
                <ErrorMessage
                  className="errorStyleText"
                  name="phone"
                  component="div"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1 col-start-1">
                <label htmlFor="date">{faTexts.deliveryDate} </label>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  highlightToday="true"
                  editable={false}
                  name="date"
                  id="date"
                  className="red"
                  calendarPosition="bottom-right"
                  value={dateValue}
                  onChange={(newValue) =>
                    handleDateChange(newValue, { setFieldValue })
                  }
                  inputClass="editInput"
                  placeholder="برای انتخاب تاریخ کلیک کنید"
                />
                <ErrorMessage
                  className="errorStyleText"
                  name="date"
                  component="div"
                />
              </div>
            </div>
            <div className="w-52">
              <button type="submit" className="outlineButton">
                {faTexts.pay}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Checkout;
