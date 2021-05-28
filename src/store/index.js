// import { createStore } from "redux";
import {
  createSlice,
  ConfigureStoreOptions,
  configureStore,
} from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
// Redux toolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increasement(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
}); //only mutate states in redux toolkit

const initialAuthStates = {
  isAuth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthStates,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  //   reducer: counterSlice.reducer,
}); //configureStore like createStore but can merge multiple reducers

// --------Redux--------
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
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;
