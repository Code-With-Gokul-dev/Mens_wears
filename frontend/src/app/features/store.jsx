import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartStore/cartSlice"
import authReducer from "./authStore/authServices"
import { baseApi } from "./baseAPi";

const store = configureStore({
    reducer: {
        items: cardReducer,
        auth: authReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),

    devTools: process.env.NODE_ENV !== "production",
});

export default store;