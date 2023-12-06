import React from "react";
import faTexts from "../../../utils/Constants";

function Dashborad() {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="flex justify-between w-full p-5 items-center bg-gray-800 text-white">
        <span>{faTexts.dashborad}</span>
      </div>
    </div>
  );
}

export default Dashborad;
