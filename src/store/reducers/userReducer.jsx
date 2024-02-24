import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isListLoading: false,
    isListError: false,
    isListSuccess: false,
    listError: null,
    listData: null,

    isSingleLoading: false,
    isSingleError: false,
    isSingleSuccess: false,
    singleError: null,
    singleData: {},

    isCreateLoading: false,
    isCreateError: false,
    isCreateSuccess: false,
    createError: null,

    isUpdateLoading: false,
    isUpdateError: false,
    isUpdateSuccess: false,
    updateError: null,

    isDeleteLoading: false,
    isDeleteError: false,
    isDeleteSuccess: false,
    deleteError: null,
};

export const getUserList = createAsyncThunk("user/getUserList", async () => {
    const url = "https://reqres.in/api/users";
    const res = await axios.get(url);
    return res.data;
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserList.pending, (state, action) => {
            console.log("action pending", action)
            state.isListLoading = true;
            state.isListError = false;
            state.isListSuccess = false;
            state.listError = null;
            state.listData = null;
        });
        builder.addCase(getUserList.rejected, (state, action) => {
            console.log("action rejected:", action)
            const { type, payload, error } = action;
            state.isListLoading = false;
            state.isListError = true;
            state.isListSuccess = false;
            state.listError = error;
            state.listData = null;
        });

        builder.addCase(getUserList.fulfilled, (state, action) => {
            console.log("action fulfilled", action)
            const { payload } = action;
            state.isListLoading = false;
            state.isListError = false;
            state.isListSuccess = true;
            state.listError = null;
            state.listData = payload?.data || [];

        })

    },
});

export default userSlice.reducer;
