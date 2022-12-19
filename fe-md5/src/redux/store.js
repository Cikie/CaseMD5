import {configureStore} from "@reduxjs/toolkit";
import blogsReducer from "./blog/blockSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer
    }
})