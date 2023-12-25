import React from "react";
import { MdClear } from "react-icons/md";
import faTexts from "../../utils/Constants";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center font-IranRegular gap-10">
      <div className="flex gap-4 justify-center items-center">
        <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center">
          <MdClear className="w-16 h-16" />
        </div>

        <p className="text-lg">{faTexts[404]}</p>
      </div>
      <Link to={"/"} className="text-blue-700 hover:underline">
        رفتن به صفحه اصلی
      </Link>
    </div>
  );
}

export default NotFound;
