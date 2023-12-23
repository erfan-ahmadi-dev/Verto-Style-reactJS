import React, { useState } from "react";

import { BASE_THUMBNAIL_URL } from "../../utils/Constants";
import QuantityInput from "../ui/input/QuantityInput";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../Redux/cart/CartSlice";
function CartItem({ data }) {
  const [quantity, setQuantity] = useState(data.count);
  const cartDispatch = useDispatch();
  const handleDelete = () => {
    cartDispatch(deleteItem(data.id));
  };
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
        isInCart={true}
        itemId={data.id}
      />
      <span className="w-3/12 text-center line-clamp-1">
        {data.price.toLocaleString("fa-IR")} تومان
      </span>
      <span className="deleteSpan" onClick={handleDelete}>
        حذف
      </span>
    </div>
  );
}

export default CartItem;
