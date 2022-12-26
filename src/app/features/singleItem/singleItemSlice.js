import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    item:'',
    reqStatus: 'idle'
}

export const getItem = createAsyncThunk('item/getItem', async(ItemProps) => {
    const {itemUrl} = ItemProps
    const response = await axios.get(itemUrl)
    const data = response.data
    console.log(data)
    return data
})

const singleItem = createSlice({
    name: 'singleItem',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getItem.pending, (state) => {
            state.reqStatus = 'loading'
        })
        .addCase(getItem.fulfilled, (state,action)=> {
            state.item = action.payload
            state.reqStatus = 'succeeded'
        })
        .addCase(getItem.rejected, (state) => {
            state.reqStatus = 'failed'
        })
    }
})

export default singleItem.reducer
export const item = (state) => state.singleItemReducer.item
export const reqStatus = (state) => state.singleItemReducer.reqStatus