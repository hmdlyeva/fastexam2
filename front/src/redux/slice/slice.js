import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
        const response = await axios.get('http://localhost:5000/users')
        return response.data
    }
)

export const AddData = createAsyncThunk(
    'users/add',
    async (newP) => {
        const response = await axios.post(`http://localhost:5000/users`, newP)
        return response.data
    }
)

export const delData = createAsyncThunk(
    'users/del',
    async (id) => {
        const response = await axios.delete(`http://localhost:5000/users/${id}`)
        return response.data
    }
)


const initialState = {
    products: [],
    wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    basket: JSON.parse(localStorage.getItem('cart')) || []

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

        AddtoWish: (state, action) => {
            const { _id, name, detail, price } = action.payload
            let index = state.wishlist.findIndex((p) => p._id === _id)

            if (index !== -1) {
                state.wishlist = state.wishlist.filter((p) => p._id !== _id)
            }
            else {
                state.wishlist.push({ _id, name, detail, price })
            }
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        },

        AddtoCart: (state, action) => {
            const { _id, name, detail, price } = action.payload
            let index = state.basket.findIndex((p) => p._id === _id)

            if (index !== -1) {
                state.basket[index].count += 1
            }
            else {
                state.basket = [
                    ...state.basket,
                    { _id, name, detail, price, count: 1 }
                ]
            }
            localStorage.setItem('cart', JSON.stringify(state.basket))
        },
        remvCart: (state, action) => {
            const { _id, name, detail, price } = action.payload
            let index = state.basket.findIndex((p) => p._id === _id)

            if (index !== -1) {

                if (state.basket[index].count > 1) {
                    state.basket[index].count -= 1
                }
                else {
                    state.basket = state.basket.filter((p) => p._id !== _id)
                }
            }

            localStorage.setItem('cart', JSON.stringify(state.basket))
        },


        dellCart: (state, action) => {
            const { _id, name, detail, price } = action.payload
            let index = state.basket.findIndex((p) => p._id === _id)

            if (index !== -1) {
                state.basket = state.basket.filter((p) => p._id !== _id)
            }

            localStorage.setItem('cart', JSON.stringify(state.basket))
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.products = [...action.payload]
        })
        builder.addCase(AddData.fulfilled, (state, action) => {
            state.products.push(action.payload)
        })
        builder.addCase(delData.fulfilled, (state, action) => {
            state.products = state.products.filter((p) => p._id !== action.payload._id)
        })
    },

})

export const { AddtoWish, AddtoCart, remvCart, dellCart } = counterSlice.actions

export default counterSlice.reducer