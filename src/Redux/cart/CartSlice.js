import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  tempCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].count += action.payload.count;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseCount: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].count =
          state.cart[existingItemIndex].count + 1;
      }
    },
    decreaseCount: (state, action) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].count =
          state.cart[existingItemIndex].count - 1;
      }
    },
  },
});

export const { addToCart, deleteItem, decreaseCount, increaseCount } =
  cartSlice.actions;

export default cartSlice.reducer;
