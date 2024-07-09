import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./reducers/cartReducers";

export default configureStore({
  reducer: {
    cart: cartReducers,
  }
})