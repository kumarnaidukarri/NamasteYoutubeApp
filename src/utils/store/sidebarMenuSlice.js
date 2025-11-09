// slice contains particial data of Redux Store.  i.e, Sidebar menu data
import { createSlice } from "@reduxjs/toolkit";

const sidebarMenuSlice = createSlice({
  name: "sidebarMenu",
  initialState: { isMenuOpen: true },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
}); // creates a slice

export const { toggleMenu, closeMenu } = sidebarMenuSlice.actions;
export default sidebarMenuSlice.reducer;
