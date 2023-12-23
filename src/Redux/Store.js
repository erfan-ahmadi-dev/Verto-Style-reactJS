import { combineReducers, configureStore } from "@reduxjs/toolkit";
import priceSlice from "./priceAndQuantity/priceSlice";
import cartSlice from "./cart/CartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist configuration for the cart slice
const rootPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

// Combine reducers
const rootReducer = combineReducers({
  updatePriceAndQuantity: priceSlice,
  cart: persistReducer(rootPersistConfig, cartSlice),
});

// Create the persisted reducer
// const persistedReducer = persistReducer(cartPersistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
});

// Create the persistor
export const persistor = persistStore(store);
