import {configureStore} from '@reduxjs/toolkit'
import featuredProducts from './features/featuredProducts/featuredProdSlice'
import MensReducer from './features/MensProducts/menSlice'
import singleItemReducer from './features/singleItem/singleItemSlice'

export const store = configureStore({
    reducer: {
        featuredProducts : featuredProducts,
        MensReducer,
        singleItemReducer
    }
})