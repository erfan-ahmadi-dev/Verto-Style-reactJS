import React from "react";
import { MdOutlineDone, MdClear } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { clearData } from "../../../Redux/cart/CartSlice";
function PaymentResult() {
  const { status } = useParams();
  const cartDispatch = useDispatch();

  if (status === "success") {
    cartDispatch(clearData());
    return (
      <div className="w-full h-[100vh] flex flex-col justify-center items-center font-IranRegular gap-10">
        <div className="flex gap-4 justify-center items-center">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
            <MdOutlineDone className="w-16 h-16" />
          </div>
          <p className="text-lg">
            پرداخت با موفقیت انجام شد منتظر تماس ما باشید
          </p>
        </div>
        <Link to={"/"} className="text-blue-700 hover:underline">
          رفتن به صفحه اصلی
        </Link>
      </div>
    );
  } else {
    return (
      <div className="w-full h-[100vh] flex flex-col justify-center items-center font-IranRegular gap-10">
        <div className="flex gap-4 justify-center items-center">
          <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center">
            <MdClear className="w-16 h-16" />
          </div>

          <p className="text-lg">
            پرداخت با شکست مواجه شد سفارش شما در انتظار پرداخت است
          </p>
        </div>
        <Link to={"/"} className="text-blue-700 hover:underline">
          رفتن به صفحه اصلی
        </Link>
      </div>
    );
  }
}

//   return (
//     <div className="flex justify-center w-full h-screen items-center font-IranRegular">
//       <div className="w-1/3">
//         <h3 className="text-2xl ">نتیجه پرداخت</h3>
//         <img src="" alt="" />
//         <span>message</span>

//         <span>رفتن به صفحه اصلی</span>
//       </div>
//     </div>
//   );
// }

export default PaymentResult;

// import React from "react";
// import { Link, useParams } from "react-router-dom";

// function PaymentStatus() {
//   const { status } = useParams();
//   return status === "success" ? (
//     <div className="w-full h-[100vh] flex flex-col justify-center items-center">
//       <div className="flex gap-4 justify-center items-center">
//         <i
//           className="fa fa-check-circle"
//           style={{ fontSize: 100 + "px", color: "green" }}></i>
//         <p className="text-lg">پرداخت با موفقیت انجام شد منتظر تماس ما باشید</p>
//       </div>
//       <Link to={"/"} className="text-blue-700 hover:underline">
//         رفتن به صفحه اصلی
//       </Link>
//     </div>
//   ) : (
//     <div className="w-full h-[100vh] flex flex-col justify-center items-center">
//       <div className="flex gap-4 justify-center items-center">
//         <i
//           className="fa fa-exclamation-circle"
//           style={{ fontSize: 100 + "px", color: "red" }}></i>

//         <p className="text-lg">
//           پرداخت با شکست مواجه شد سفارش شما در انتظار پرداخت است
//         </p>
//       </div>
//       <Link to={"/"} className="text-blue-700 hover:underline">
//         رفتن به صفحه اصلی
//       </Link>
//     </div>
//   );
// }

// export default PaymentStatus;
