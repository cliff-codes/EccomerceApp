import {configureStore} from '@reduxjs/toolkit'
import cartItemsReducer from './features/cart/cartSlice'
import latestItemsReducer from './features/latestProducts/latestSlice'
import allProductsReducer from './features/allProducts/productSlice'

export const store = configureStore({
    reducer:{
        cartItems: cartItemsReducer,
        latestItems: latestItemsReducer,
        allItems: allProductsReducer
    }
})
