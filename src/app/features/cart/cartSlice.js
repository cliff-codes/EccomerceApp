import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartItemsSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.cartItems.push(action.payload)
            console.log(action.payload)
        }
    }
})

export default cartItemsSlice.reducer
export const {addToCart} = cartItemsSlice.actions 
export const totalItems = (state) => state.cartReducer.cartItems 
