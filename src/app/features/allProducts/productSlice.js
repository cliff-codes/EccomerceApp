import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: [],
    status: 'idle',
    errMsg: null
}

const API_URL = 'https://fakestoreapi.com/products'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async() => {
   try {
        const response = await axios.get(API_URL)
        const {data} = response
        console.log(data)
        return data
   } catch (error) {
        console.log(error)
   }
})

const allItems = createSlice({
    name: 'allItems',
    initialState,
    reducers: {
        setReqStatus: (state,action) => {
            state.status = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.items = action.payload
            state.status = 'fulfilled'
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = 'failed'
        })
    }
})

export default allItems.reducer
export const reqStatus = (state) => state.allItems.status
export const productItems = (state) => state.allItems.items
export const {setReqStatus} = allItems.actions