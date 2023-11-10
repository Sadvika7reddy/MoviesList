import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthRedux";

const store = configureStore({
  reducer: { auth: authReducer},
});

export default store;