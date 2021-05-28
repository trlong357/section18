// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
  //   reducer: counterSlice.reducer,
}); //configureStore like createStore but can merge multiple reducers

export default store;
