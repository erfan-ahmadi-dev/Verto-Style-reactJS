import React from "react";

function Payment() {
  return (
    <div className="flex items-center w-full justify-center relative font-IranRegular">
      <img src="paymock.jpg" alt="payment" />
      <div className="absolute bottom-20 w-5/12 bg-white py-5 right-44 flex justify-around">
        <button className="px-8 py-2 bg-green-500 text-white">پرداخت</button>
        <button className="px-8 py-2 bg-red-500 text-white">انصراف</button>
      </div>
    </div>
  );
}

export default Payment;
