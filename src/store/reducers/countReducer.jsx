import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 100,
};
const countSlice = createSlice({
  name: "count",
  initialState,
  reducers:{
    increment: (state, action)=> {
      const { payload } = action;
      const { value } = payload;
      state.value = state.value + value;
    },
    decrement:(state, action)=> {
      const { payload } = action;
      const { value } = payload;
      state.value = state.value - value;
    },
  },

  extraReducers: (builder) => {},
});

export const {increment, decrement} = countSlice.actions;
export default countSlice.reducer;