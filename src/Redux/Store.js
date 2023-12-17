import { configureStore } from "@reduxjs/toolkit";
import priceSlice from "./priceAndQuantity/priceSlice";

export const store = configureStore({
  reducer: {
    updatePriceAndQuantity: priceSlice,
  },
});
