import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getLikes = createAsyncThunk(
    'like/getLike',
    async ()=>{
        const res = await axios.get('http://localhost:8080/likes/get');
        return res.data;
    }
);
export const addLikes = createAsyncThunk(
    'likes/addLikes',
    async (data)=>{
        const res = await axios.post('http://localhost:8080/likes/add',data);
        return res.data
    }
)