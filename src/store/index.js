import { combineReducers, configureStore } from "@reduxjs/toolkit";

import countReducer from "./reducers/countReducer";

const store = configureStore({
  reducer: combineReducers({count: countReducer}),
});

export default store;
