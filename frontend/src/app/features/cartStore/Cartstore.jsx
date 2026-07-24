import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice"


 const store = configureStore({
    reducer:{
        items: cardReducer,
    },
});

export default store;