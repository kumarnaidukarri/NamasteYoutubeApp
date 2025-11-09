// appStore stores app data.  i.e, global object
import { configureStore } from "@reduxjs/toolkit";
import sidebarMenuReducer from "./sidebarMenuSlice.js";

const appStore = configureStore({
  reducer: { sidebarMenu: sidebarMenuReducer },
}); // creates a store with given Slices

export default appStore;
