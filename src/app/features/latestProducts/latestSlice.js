import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    items: [],
    status: 'idle', //loading failed,
    errorMsg: null
}

const API_URL = 'https://fakestoreapi.com/products?limit=6'

export const fetchItems = createAsyncThunk('items/fetchItems', async() => {
    try {
        const response = await axios.get(API_URL)
        const {data} = response
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
} )

const latestItems = createSlice({
    name : 'latestItems',
    initialState,
    reducers: {
        doSomething: (state) => {

        }
    },
    extraReducers(builder){
        builder.addCase(fetchItems.pending, (state)=> {
            state.status = 'loading'
        })
        builder.addCase(fetchItems.fulfilled, (state,action)=> {
            state.status = 'fulfilled'
            state.items = action.payload
        })
        builder.addCase(fetchItems.rejected, (state)=> {
            state.status = 'failed'
        })
    }

})

export const reqStatus = (state) => state.latestItems.status 
export const items = (state) => state.latestItems.items 
export default latestItems.reducer
