import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteProduct, editProduct, fetchProducts, postProduct } from './productsAPI';

const initialState = {
    products: [],
    isLoading: false,
    postSuccess: false,
    deleteSuccess: false,
    updateSuccess: false,
    isError: false,
    error: "",
}
// --------get products---------
export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const products = fetchProducts();
    return products;

});

// --------add products---------
export const addProduct = createAsyncThunk("products/addProducts", async (data) => {
    const product = postProduct(data);
    return product;

});

// --------delete products---------
export const removeProduct = createAsyncThunk("products/removeProducts", async (id, thunk) => {
    const product = deleteProduct(id);
    thunk.dispatch(removeFromList(id))
    return product;

});

// --------update products---------
export const updateProduct = createAsyncThunk("products/updateProducts", async (data) => {
    const product = editProduct(data);
    return product;

});

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // -----Added Successfully shows at the time of visited addProduct.jsx. It'll be fixed here
        togglePostSuccess: (state) => {
            state.postSuccess = false;
        },

        toggleDeleteSuccess: (state) => {
            state.postSuccess = false;
        },

        // -----Updated Successfully shows at the time of visited addProduct.jsx. It'll be fixed here
        toggleUpdateSuccess: (state) => {
            state.updateSuccess = false;
        },

        removeFromList: (state, action) => {
            const restProducts = state.products.filter(product => product._id !== action.payload);
            state.products = restProducts;

        }

    },
    extraReducers: (builder) => {
        builder
            // ------------get products----------
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

            // ------------add products----------
            .addCase(addProduct.pending, (state) => {
                state.isLoading = true;
                state.postSuccess = false;
                state.isError = false;
            })
            .addCase(addProduct.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                state.postSuccess = true;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.postSuccess = false;
                state.isError = true;
                state.error = action.error.message;
            })

            // ------------delete products----------
            .addCase(removeProduct.pending, (state) => {
                state.isLoading = true;
                state.deleteSuccess = false;
                state.isError = false;
            })
            .addCase(removeProduct.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                state.deleteSuccess = true;
            })
            .addCase(removeProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.deleteSuccess = false;
                state.isError = true;
                state.error = action.error.message;
            })

            // ------------delete products----------
            .addCase(updateProduct.pending, (state) => {
                state.isLoading = true;
                state.updateSuccess = false;
                state.isError = false;
            })
            .addCase(updateProduct.fulfilled, (state) => {
                state.isLoading = false;
                state.isError = false;
                state.updateSuccess = true;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.updateSuccess = false;
                state.isError = true;
                state.error = action.error.message;
            })

    },

})

export const { togglePostSuccess, toggleDeleteSuccess,toggleUpdateSuccess, removeFromList } = productsSlice.actions;
export default productsSlice.reducer