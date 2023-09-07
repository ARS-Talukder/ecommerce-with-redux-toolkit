import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();

    return data;

});

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.products = [];
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })

    },

})


export default productsSlice.reducer