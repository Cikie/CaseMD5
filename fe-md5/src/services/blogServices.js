import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
        'blogs/getBlogs',
    async ()=>{
        const res = await axios.get('http://localhost:8080/laptops');
        return res.data;
    }
)