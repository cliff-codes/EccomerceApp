import {configureStore} from '@reduxjs/toolkit'
import featuredProducts from './features/featuredProducts/featuredProdSlice'
import MensReducer from './features/MensProducts/menSlice'

export const store = configureStore({
    reducer: {
        featuredProducts : featuredProducts,
        MensReducer
    }
})