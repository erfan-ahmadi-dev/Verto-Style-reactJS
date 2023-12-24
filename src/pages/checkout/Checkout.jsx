import React, { useState } from "react";
import CustomDatePicker from "../../components/datePicker/CutsomDatePicker";
import faTexts from "../../utils/Constants";

function Checkout() {
  const [dateValue, setDate] = useState();
  return (
    <div className="font-IranRegular h-screen flex flex-col  justify-center items-center gap-10">
      <h3 className="text-xl">{faTexts.confirmOrder}</h3>
      <form action="" className="w-1/2 flex flex-col items-center gap-10">
        <div className="w-full grid grid-cols-2 gap-5 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName">{faTexts.firstName}</label>
            <input type="text" name="firstName" className="editInput" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lasttName">{faTexts.lastName} </label>
            <input type="text" name="firstName" className="editInput" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address">{faTexts.address}</label>
            <textarea type="tex" name="address" className="editInput" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone">
              <span>{faTexts.phone}</span>
              <span className="text-sm text-gray-400"> {faTexts.phoneFor}</span>
            </label>
            <input type="text" name="phone" className="editInput" />
          </div>
          <div className="flex flex-col gap-2 col-span-1 col-start-1">
            <label htmlFor="firstName">{faTexts.deliveryDate} </label>
            <CustomDatePicker dateValue={dateValue} setDate={setDate} />
          </div>
        </div>
        <div className="w-52 ">
          <button className="outlineButton">{faTexts.pay}</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
