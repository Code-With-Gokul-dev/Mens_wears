import { createSlice } from "@reduxjs/toolkit";
import cart from "../../../../data/loginData.json"

const cartData = cart[0].cart.items;
const cartSlice = createSlice({
    name: "items",
    initialState: { value: cartData },
    reducers: {
        handleDelete(state, action) {
            state.value = state.value.filter((item) => item.productId !== action.payload);

        }
    }
})


export const { handleDelete } = cartSlice.actions;
export default cartSlice.reducer;