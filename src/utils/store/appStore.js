// appStore stores app data.  i.e, global object
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({}); // creates a store with given Slices

export default appStore;
