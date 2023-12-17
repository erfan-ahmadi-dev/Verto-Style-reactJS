import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  priceEidts: [],
};
const priceQuantitySlice = createSlice({
  name: "editor",
  initialState: initialState,
  reducers: {
    editPriceAndQuantity: (state, action) => {
      const findIdOfprice = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findIdOfprice) {
        findIdOfprice.isEditingPrice = action.payload.isEditingPrice;
        findIdOfprice.isEditingQuantity = action.payload.isEditingQuantity;
      } else {
        state.items.push(action.payload);
      }
    },
    saveEdits: (state, action) => {
      state.priceEidts.push(action.payload);
    },
    cancelPriceEdit: (state, action) => {
      const { id, isEditing } = action.payload;
      const itemToCancel = state.items.find((item) => item.id === id);
      // console.log("price", itemToCancel);
      if (itemToCancel) {
        itemToCancel.isEditingPrice = isEditing;
      }
    },
    cancelQuantityEdit: (state, action) => {
      const itemToCancel = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToCancel) {
        itemToCancel.isEditingQuantity = action.payload.isEditingQuantity;
      }
      console.log(state.items);
    },
  },
});

export const {
  editPriceAndQuantity,
  saveEdits,
  cancelPriceEdit,
  cancelQuantityEdit,
} = priceQuantitySlice.actions;

export default priceQuantitySlice.reducer;
