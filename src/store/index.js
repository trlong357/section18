// import { createStore } from "redux";
import {
  createSlice,
  ConfigureStoreOptions,
  configureStore,
} from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
// Redux toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increasement(state, action) {
      state.counter += action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
}); //only mutate states in redux toolkit

const store = configureStore({
  //   reducer: { counter: counterSlice.reducer },
  reducer: counterSlice.reducer,
}); //configureStore like createStore but can merge multiple reducers

// ----------------
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// ------------
export default store;
