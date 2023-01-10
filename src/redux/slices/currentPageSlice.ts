import { createSlice } from "@reduxjs/toolkit";

interface ICurrentPage {
  current: "about" | "skills" | "projects" | "contacts";
}
const initialState = {
  current: "about",
};

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.current = action.payload;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
