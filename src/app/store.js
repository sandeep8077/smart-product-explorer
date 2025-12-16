import productReducer from "../features/products/productSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store  = configureStore({
    reducer:{
        product:productReducer
    }
})