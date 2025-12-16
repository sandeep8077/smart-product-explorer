import {createSlice} from '@reduxjs/toolkit';
import { fetchProductsApi } from '../../services/productApi';
import { createAsyncThunk } from '@reduxjs/toolkit';



 export const fetchAsyncProducts = createAsyncThunk(
    'products/fetchAsyncProducts',
    async()=>{
        const response = await fetchProductsApi();
        return response;
    }
 )

const initialState = {
    products:[],
    error:null,
    isLoading:false
}




const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAsyncProducts.pending,(state)=>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchAsyncProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.products = action.payload;

        })
        .addCase(fetchAsyncProducts.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    }

    

}
)

export const productSelector = (state)=>state.product.products;
export default productSlice.reducer;


