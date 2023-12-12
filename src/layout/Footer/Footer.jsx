import React from "react";
import logo from "../../assets/images/logoblack.svg";
import { BsYoutube, BsInstagram, BsTelegram } from "react-icons/bs";
import faTexts from "../../utils/Constants";
import { certicates } from "../../assets/images";
function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800  mt-5  ">
      <div className="flex flex-col mx-auto max-w-screen-xl text-center justify-center items-center border-t-2 border-gray-200 py-4">
        <div className="w-full items-center flex justify-center">
          <img src={logo} className="h-10" alt="" />
        </div>
        <div className=" w-full  flex justify-between align-middle items-center gap-4 border-b-2 flex-col lg:flex-row py-2">
          <p className=" w-full lg:w-9/12 text-justify my-6 px-4 text-gray-500 dark:text-gray-400 leading-8 font-IranRegular">
            <span className="font-IranExtraBold ">{faTexts.storeName}</span>
            <br />
            {faTexts.footerText}
          </p>
          <div className="flex gap-2   ">
            <img
              src={certicates.enmad}
              alt="enamad"
              className="cursor-pointer"
            />
            <img
              src={certicates.samandehi}
              alt="samandehi"
              className="cursor-pointer"
            />
            <img
              src={certicates.etehadye}
              alt="ethedye"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-row w-full  justify-between items-center border-b-2 my-4 pb-4 gap-4 ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400  ">
            {faTexts.copyRight} © 1402
          </span>
          <div className="flex gap-4 px-4">
            <BsInstagram className="cursor-pointer" />
            <BsTelegram className="cursor-pointer" />
            <BsYoutube className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
