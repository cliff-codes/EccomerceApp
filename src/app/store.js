import {configureStore} from '@reduxjs/toolkit'
import cartItemsReducer from './features/cart/cartSlice'
import latestItemsReducer from './features/latestProducts/latestSlice'

export const store = configureStore({
    reducer:{
        cartItems: cartItemsReducer,
        latestItems: latestItemsReducer
    }
})
