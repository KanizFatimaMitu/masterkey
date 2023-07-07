import { getProducts } from "./ProductAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const Products = await getProducts();
    return Products;
});

const ProductSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.products = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default ProductSlice.reducer;
