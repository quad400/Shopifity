import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice"
import productReducer from "../features/productSlice"


export const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
})