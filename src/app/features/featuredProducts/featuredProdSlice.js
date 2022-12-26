import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
    products : [],
    status: 'idle'
}

const ApiUrl  = 'https://fakestoreapi.com/products/category/jewelery?limit=4'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {
    const response = await axios.get(ApiUrl)
    const {data} = response
    return data
})

const feauturedSlice =  createSlice({
    name: 'featuredProducts',
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.products = action.payload
            state.status = 'succes'
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export default feauturedSlice.reducer
export const featuredItems = (state) => state.featuredProducts.products
export const reqStatus = (state) => state.featuredProducts.status
