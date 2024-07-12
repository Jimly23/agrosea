import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./reducers/cartReducers";
import authReducers from "./reducers/authReducers";

export default configureStore({
  reducer: {
    cart: cartReducers,
    auth: authReducers,
  }
})