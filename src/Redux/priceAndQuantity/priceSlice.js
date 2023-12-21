import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
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
    cancelPriceEdit: (state, action) => {
      const { id, isEditing } = action.payload;
      const itemToCancel = state.items.find((item) => item.id === id);
      if (itemToCancel) {
        if (itemToCancel.isEditingPrice) {
          itemToCancel.isEditingPrice = isEditing;
          itemToCancel.price = itemToCancel.previousPrice;
        }
      }
    },

    cancelQuantityEdit: (state, action) => {
      const { id, isEditingQuantity } = action.payload;
      const itemToCancel = state.items.find((item) => item.id === id);
      if (itemToCancel) {
        if (itemToCancel.isEditingQuantity) {
          itemToCancel.isEditingQuantity = isEditingQuantity;
          itemToCancel.quantity = itemToCancel.previousQuantity;
        }
      }
    },
    updateData: (state, action) => {
      const findIdOfprice = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findIdOfprice) {
        findIdOfprice.price = action.payload.price;
        findIdOfprice.quantity = action.payload.quantity;
      }
    },
    clearData: (state) => {
      state.items = [];
    },
  },
});

export const {
  editPriceAndQuantity,
  saveEdits,
  cancelPriceEdit,
  cancelQuantityEdit,
  updateData,
  clearData,
} = priceQuantitySlice.actions;

export default priceQuantitySlice.reducer;
