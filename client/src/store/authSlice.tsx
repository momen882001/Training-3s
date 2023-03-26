import { createSlice } from "@reduxjs/toolkit";

export type authState = {
    isLoggedIn: boolean
}

const initialState : authState = {isLoggedIn : false};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logInOut: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
        },
    },
})

export const {logInOut} = authSlice.actions;
export default authSlice.reducer;