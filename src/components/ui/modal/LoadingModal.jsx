import React from "react";
import { LuLoader as Loading } from "react-icons/lu";
import logo from "../../../assets/images/logoblack.svg";
function LodingModal() {
  return (
    <div
      id="popup-modal"
      className={
        " overflow-y-auto overflow-x-hidden fixed top-0 left-0 right-0  z-50 flex justify-center  items-center bg-white w-full md:inset-0  max-h-full h-screen  "
      }
    >
      <div className=" w-64 h-44 ">
        <div className=" shadow-2xl rounded-xl bg-gray-50 flex flex-col  items-center justify-between py-10 h-full">
          <img
            src={logo}
            alt="logo"
            className="mx-auto mb-4 text-gray-400 w-2/4 h-fit dark:text-gray-200"
          />
          <Loading className="animate-spin w-8 h-fit" />
        </div>
      </div>
    </div>
  );
}

export default LodingModal;
