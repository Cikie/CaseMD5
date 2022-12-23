import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async ()=>{
        const res = await axios.get('http://localhost:8080/blogs/get');
        return res.data;
    }
)

export const addBlog = createAsyncThunk(
    'blogs/addBlog',
    async (data)=>{
        const res = await axios.post('http://localhost:8080/blogs/add-blog',data);
        return res.data
    }
)