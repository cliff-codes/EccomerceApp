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
        },
        removeItem: (state,action) => {
            const filteredItems = state.cartItems.filter((item) => !(item.cartId === action.payload) ? item : null)
            state.cartItems = filteredItems
        }
    }
})

export default cartItemsSlice.reducer
export const {addToCart,removeItem} = cartItemsSlice.actions 
export const totalItems = (state) => state.cartReducer.cartItems 
