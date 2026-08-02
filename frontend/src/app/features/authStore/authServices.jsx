import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { user } = action.payload;
            if (user !== undefined) {
                state.user = user;
                state.isAuthenticated = !!user;
            }
        },

        logOut: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
})


export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;