import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { decreaseCount, increaseCount } from "../../../Redux/cart/CartSlice";
function QuantityInput({
  stock,
  quantity,
  setQuantity,
  isInCart = false,
  itemId,
}) {
  const cartState = useSelector((state) => state.cart);
  const cartDispatch = useDispatch();

  const [isDisabled, setDisabled] = useState(
    stock !== false && stock <= 0 ? true : false
  );
  const existingItemIndex = cartState.cart.findIndex(
    (item) => item.id === itemId
  );
  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (value > 100) {
      value = 100;
      toast.error("حداکثر تعداد محصول 100 هست");
    } else if (value < 1) {
      value = 1;
      toast.error("تعداد سفارش نمیتواند کمتر از یک باشد");
    } else if (stock <= 0) {
      value = 0;
    }
    if (value > stock) {
      value = 1;
      toast.error("تعداد سفارش نمیتواند بیشتر از موجودی باشد");
    }
    setQuantity(isNaN(value) ? "" : value);
  };

  const handleIncrement = () => {
    if (quantity >= stock) {
      setQuantity(stock);
      toast.error("تعداد سفارش نمیتواند بیشتر از موجودی باشد");
    } else if (!isDisabled) {
      if (isInCart) {
        console.log(cartState.cart[existingItemIndex].count);
        cartDispatch(increaseCount(itemId));
      }
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1 && !isDisabled) {
      if (isInCart) {
        cartDispatch(decreaseCount(itemId));
      }
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex gap-2 items-center w-fit text-menuTextColor px-4 focus:border-none focus:outline-none border-[1px] border-gray-300 outline-none focus:ring-transparent rounded-lg text-center">
      <FaPlus
        className={`w-4 h-4 p-1 ${
          isDisabled ? "cursor-not-allowed" : "cursor-pointer"
        } select-none`}
        onClick={handleIncrement}
      />
      <input
        type="text"
        className={isDisabled ? "disabledInputQuantity" : "inputQuantity"}
        value={quantity}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <FaMinus
        className={`w-4 h-4 p-1 ${
          isDisabled ? "cursor-not-allowed" : "cursor-pointer"
        } select-none`}
        onClick={handleDecrement}
      />
    </div>
  );
}

export default QuantityInput;
