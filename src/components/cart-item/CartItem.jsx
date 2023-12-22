import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BASE_THUMBNAIL_URL } from "../../utils/Constants";
import QuantityInput from "../ui/input/QuantityInput";
function CartItem({ data }) {
  // TODO add alt to image and data
  return (
    <div className="flex items-center gap-4 border-b-2 w-full h-fit justify-between px-4 ">
      <img
        src=""
        className="rounded-t-lg aspect-square w-3/12 h-fit p-2"
        alt=""
      />
      <span className=" text-sm line-clamp-2 w-3/12">'تی شرت فلان'</span>
      {/* <div className="flex gap-2 items-center bg-backColor w-fit text-menuTextColor px-4 focus:border-none focus:outline-none border-none outline-none focus:ring-transparent rounded-lg text-center ">
        <FaPlus className="w-4 h-4 p-1 cursor-pointer" />
        <input
          type="text"
          className=" bg-backColor w-8 text-menuTextColor p-2 focus:border-none focus:outline-none border-none outline-none focus:ring-transparent rounded-lg text-center"
          value={1}
        />
        <FaMinus className="w-4 h-4 p-1 cursor-pointer" />
      </div> */}
      <QuantityInput />
      <span className="w-3/12 text-center line-clamp-1">130,000 تومان</span>
      <MdDeleteForever className="w-5 cursor-pointer" />
    </div>
  );
}

export default CartItem;
