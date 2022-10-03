import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import concertStageSlice from "./slices/concertStageSlice";
import creditCardSlice from "./slices/creditCardSlice";

const reducer = {
  concertStageSlice:concertStageSlice,
  creditCard:creditCardSlice
};

export const store = configureStore({
  reducer,
  devTools: true,//process.env.NODE_ENV === "development",
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
