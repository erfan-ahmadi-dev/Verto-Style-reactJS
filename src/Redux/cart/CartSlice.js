import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  bill: [],
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
    addBillDetail: (state, action) => {
      if (state.bill.length > 1) {
        state.bill[0] = action.payload;
      } else {
        state.bill.push(action.payload);
      }
    },
  },
});

export const {
  addToCart,
  deleteItem,
  decreaseCount,
  increaseCount,
  addBillDetail,
} = cartSlice.actions;

export default cartSlice.reducer;
