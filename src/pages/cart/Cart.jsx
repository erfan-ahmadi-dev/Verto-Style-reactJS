import React, { useEffect, useState } from "react";
import CartItem from "../../components/cart-item/CartItem";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart as CartIcon } from "react-icons/md";
import { useFormik } from "formik";
import { toast } from "react-toastify";
function Cart() {
  const cartState = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);
  const [totalDiscount, setDiscount] = useState();

  useEffect(() => {
    const subtotal = cartState.cart.reduce(
      (accumulator, product) => accumulator + product.price * product.count,
      0
    );
    if (totalDiscount !== undefined) {
      calculateDiscount(5);
    }
    setTotal(subtotal);
  }, [cartState.cart, total]);
  const calculateDiscount = (percent) => {
    const discountAmount = (percent / 100) * total;
    const discountedTotal = total - discountAmount;
    setDiscount(discountedTotal);
  };
  const formik = useFormik({
    initialValues: {
      coupon: "",
    },
    onSubmit: (values) => {
      if (values.coupon === "NEWROZ1403") {
        calculateDiscount(5);
      } else {
        toast.error("کد تخفیف اشتباه هست");
      }
    },
  });
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
          <div className="w-4/12 h-fit px-5 py-10 flex flex-col gap-10 ">
            <h3 className="text-2xl">خلاصه سفارش</h3>
            <div className="flex items-center gap-2 justify-between ">
              <span className="w-3/12 font-IranRegular text-base">
                کد تخفیف
              </span>
              <div className="flex w-full">
                <form className="flex w-full" onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    id="coupon"
                    className="couponInput"
                    placeholder="کد تخفیف را وارد کنید"
                    onChange={formik.handleChange}
                    value={formik.values.coupon}
                  />
                  <button className="couponButton" type="submit">
                    ثبت
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-gray-500">جمع کل سفارش</span>
              <span
                className={`text-xl text-left ${
                  totalDiscount !== undefined ? "line-through" : ""
                }`}
              >
                {total.toLocaleString("fa-IR")} تومان
              </span>
            </div>
            <div
              className={`${
                totalDiscount !== undefined ? "flex " : "  hidden"
              } flex-col gap-5  `}
            >
              <div className="flex justify-between">
                <span className="text-gray-500">جمع کل سفارش با تخفیف %5</span>
                <span
                  className="text-xs text-red-500 underline underline-offset-4"
                  onClick={() => setDiscount(undefined)}
                >
                  حذف تخفیف
                </span>
              </div>

              <span className="text-xl text-left">
                {totalDiscount !== undefined &&
                  totalDiscount.toLocaleString("fa-IR")}{" "}
                تومان
              </span>
            </div>
            <button className="outlineButton ">نهایی کردن خرید</button>
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
