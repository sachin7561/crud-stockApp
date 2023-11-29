import { configureStore } from "@reduxjs/toolkit";
import stockSlice from "./Slices/stockSlice";


export const store = configureStore({
    reducer:{
        stockKey:stockSlice,
    }
})