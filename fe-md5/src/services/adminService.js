import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAccount = createAsyncThunk(
    'admin/getAccount',
    async () => {
        const res = await axios.get('http://localhost:8080/admin/get-account');
        return res.data;
    }
)