import {createSlice} from '@reduxjs/toolkit';
import { fetchProductsApi } from '../../services/productApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeFavoriteApi, saveFavoriteApi } from '../../services/favoriteApi';
import { act } from 'react';



 export const fetchAsyncProducts = createAsyncThunk(
    'products/fetchAsyncProducts',
    async()=>{
        const response = await fetchProductsApi();
        return response;
    }
 )

 export const saveAsyncFavoriteApi = createAsyncThunk('products/saveFavorite',
     async (id) =>{
        return  saveFavoriteApi(id)
     }
 )

 export const removeAsyncFavoriteApi = createAsyncThunk('products/removeFavorite',async(id)=>{
    return removeFavoriteApi(id);
 }
    
 )

const initialState = {
    products:[],
    error:null,
    isLoading:false,
    favorites:[],
}




const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addFavorites(state,action){

            state.favorites.push(action.payload)
        },
        removeFavorite(state,action){
            state.favorites = state.favorites.filter((id)=>id !== action.payload);
        }

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
        .addCase(saveAsyncFavoriteApi.rejected,(state,action)=>{
            state.favorites  = state.favorites.filter((id)=> id !== action.payload);
        })
        .addCase(removeAsyncFavoriteApi.rejected,(state,action)=>{
            state.favorites.push(action.payload)

        })
    }

    

}
)

export const productSelector = (state)=>state.product.products;
export const favoriteSelector = (state)=>state.product.favorites;
export const {addFavorites,removeFavorite}  = productSlice.actions;
export default productSlice.reducer;


