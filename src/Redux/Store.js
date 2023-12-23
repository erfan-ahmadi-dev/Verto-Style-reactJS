import { configureStore } from "@reduxjs/toolkit";
import priceSlice from "./priceAndQuantity/priceSlice";
import cartSlice from "./cart/CartSlice";

export const store = configureStore({
  reducer: {
    updatePriceAndQuantity: priceSlice,
    cart: cartSlice,
  },
});
