import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: 'idle'
}

const API_URL = `https://fakestoreapi.com/products/category/men's%20clothing`

export const fetchItems = createAsyncThunk('items/fetchItems', async() => {
    const response = await axios.get(API_URL)
    const {data} = response
    return data
})

const mensProducts = createSlice({
    initialState,
    name: 'MensSlice',
    reducers: {

    },
    extraReducers(builder){
        builder.addCase(fetchItems.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchItems.fulfilled, (state,action) => {
            state.items = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchItems.rejected, (state) => {
            state.status = 'failed'
        })
        builder.addDefaultCase((state) => {
            state.status = 'failed'
        })
    }
})

export default mensProducts.reducer
export const reqStatus = (state) => state.MensReducer.status
export const items = (state) => state.MensReducer.items