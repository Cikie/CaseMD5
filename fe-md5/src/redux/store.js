import {configureStore} from "@reduxjs/toolkit";
import blogsReducer from "./blog/blockSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        user: userReducer
    }
})