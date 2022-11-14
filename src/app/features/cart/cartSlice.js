import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    cartItems: [],
}

const cartItems = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        doSomething: (state) => {

        }
    }
})

export default cartItems.reducer
