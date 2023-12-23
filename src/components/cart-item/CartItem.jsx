import React, { useState } from "react";

import { BASE_THUMBNAIL_URL } from "../../utils/Constants";
import QuantityInput from "../ui/input/QuantityInput";
function CartItem({ data }) {
  const [quantity, setQuantity] = useState(data.count);
  // TODO add alt to image and data
  return (
    <div className="flex items-center gap-4 border-b-2 w-full h-fit justify-between px-4 font-IranRegular ">
      <img
        src={`${BASE_THUMBNAIL_URL}/${data.thumbnail}`}
        className="rounded-t-lg aspect-square w-32 h-fit p-2"
        alt="product thumbnail"
      />
      <span className=" text-sm line-clamp-2 w-3/12">{data.name}</span>

      <QuantityInput
        className="w-10"
        setQuantity={setQuantity}
        quantity={quantity}
        stock={data.stock}
      />
      <span className="w-3/12 text-center line-clamp-1">
        {data.price.toLocaleString("fa-IR")} تومان
      </span>
      <span className="deleteSpan ">حذف</span>
    </div>
  );
}

export default CartItem;
