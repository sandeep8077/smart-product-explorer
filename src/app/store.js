import productReducer from "../features/products/productSlice";
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer  from '../features/notifications/notificationSlice'
import { notificationMiddleware } from "../middleware/notificationMiddleware";

export const store  = configureStore({
    reducer:{
        product:productReducer,
        notification:notificationReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(notificationMiddleware)
})