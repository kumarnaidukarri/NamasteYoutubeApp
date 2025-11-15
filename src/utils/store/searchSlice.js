// searchSlice stores search suggestion data. cache.

import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // updating state
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

// Redux Caching System
// Redux state variable stores our data
// Redux slice to store our Suggestions data Cache.
// Cache:
// * time complexity of Search in Array  = O(n)  bad
// * time complexity of Search in Object = O(1)  good
// * time complexity of Search in new Map()      best

/*
  [ i, ip, iph, iphone ]
  { i: , ip: , iph: , iphone: }
*/

// * Redux Flow Summary :-
// Component ➜ dispatch(action) ➜ reducer updates store ➜ components re-render

// * LRU caching technique:-
/*
  Least Recently Used caching
  this technique used to keep limitations for cache system.
  i.e, when to remove "old cache data" and push "new cache data" into Redux Cache System.
*/
