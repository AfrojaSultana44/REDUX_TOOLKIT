import { combineReducers, configureStore } from "@reduxjs/toolkit";

import countReducer from "./reducers/countReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: combineReducers({count: countReducer, user: userReducer}),
});

export default store;
