import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import currentPageSlice from "./slices/currentPageSlice";

const store = configureStore({
  reducer: {
    currentPage: currentPageSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
