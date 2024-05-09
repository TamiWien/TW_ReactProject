import { configureStore } from "@reduxjs/toolkit";
import ToCartReducer from "../states/cartSlice"

export const store = configureStore({
    reducer: {
        toCart: ToCartReducer
    }
});