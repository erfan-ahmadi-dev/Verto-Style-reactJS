import React, { useEffect, useState } from "react";
import CartItem from "../../components/cart-item/CartItem";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart as CartIcon } from "react-icons/md";
function Cart() {
  // TODO fix counter and validation
  const cartState = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const subtotal = cartState.cart.reduce(
      (accumulator, product) => accumulator + product.price * product.count,
      0
    );
    setTotal(subtotal);
  }, [cartState.cart]);

  return (
    <div className="font-IranRegular px-10 py-5 flex flex-col gap-5 justify-center items-center">
      {cartState.cart.length >= 1 ? (
        <div className="flex w-full  gap-8  justify-between">
          <div className="w-7/12 h-fit py-10 flex flex-col gap-10 ">
            <h3 className="text-2xl ">سبد خرید</h3>
            {cartState.cart.map((item) => {
              return <CartItem data={item} key={item.id} />;
            })}
          </div>
          <div className="w-4/12 h-fit px-5 py-10 flex flex-col gap-10">
            <h3 className="text-2xl">خلاصه سفارش</h3>
            <div className="flex items-center">
              <span className="w-3/12 font-IranRegular text-base">
                کد تخفیف
              </span>
              <input
                type="text"
                className="editInput"
                placeholder="کد تخفیف را وارد کنید"
              />
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-gray-500">جمع کل سفارش</span>
              <span className="text-xl text-left">
                {total.toLocaleString("fa-IR")} تومان
              </span>
            </div>
            <button className="outlineButton">نهایی کردن خرید</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center self-center h-screen">
          <CartIcon className="w-20 h-20" />
          <span className=" w-full text-center">سبد خرید شما خالی هست</span>
        </div>
      )}
    </div>
  );
}

export default Cart;
