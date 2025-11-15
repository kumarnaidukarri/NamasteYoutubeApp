// appStore stores app data.  i.e, global object
import { configureStore } from "@reduxjs/toolkit";
import sidebarMenuReducer from "./sidebarMenuSlice.js";
import searchSliceReducer from "./searchSlice.js";

const appStore = configureStore({
  reducer: { sidebarMenu: sidebarMenuReducer, search: searchSliceReducer },
}); // creates a store with given Slices

export default appStore;

// REDUX explain
/*

1. Store(Global State)      :- A big JavaScript object that holds all app data.

2. Reducers(State Updaters) :- they decide HOW the state changes when an action happens.
   ex: cacheResults(state, action)

3. Actions(Messages)        :- they are plain objects describing WHAT happened.
   Redux sends this message to reducers → reducers update the store.
   ex: { type: "search/cacheResults", payload: {iphone: ["iphone 11"]} }

4. useSelector()            :- Read data from Store.
   ex: searchCache = useSelector(store => store.search);

5. useDispatch()            :- Write data to Store.
   Triggers the reducer → state updates → components re-render.
   ex: dispatch(cacheResults( {iphone:["iphone 11"]} ));

*/
