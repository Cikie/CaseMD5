import {configureStore} from "@reduxjs/toolkit";
import blogsReducer from "./blog/blockSlice";
import userReducer from "./user/userSlice";
import adminReducer from "./admin/adminSlice";
import likesReducer from "./like/likeSlice"

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        user: userReducer,
        account:adminReducer,
        likes:likesReducer
    }
})