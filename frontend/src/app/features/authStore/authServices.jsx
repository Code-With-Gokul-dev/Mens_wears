import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        isAuthenticated: false,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            if (user !== undefined) state.user = user;
            if (token !== undefined) state.token = token;
            state.isAuthenticated = !!state.token;
        },

        logOut: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
})


export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;