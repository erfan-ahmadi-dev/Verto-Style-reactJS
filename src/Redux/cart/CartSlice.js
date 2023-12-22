import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findIdOfprice = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!findIdOfprice) {
        state.cart.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
