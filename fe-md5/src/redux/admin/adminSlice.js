import {createSlice} from "@reduxjs/toolkit";
import {getAccount} from "../../services/adminService";

const initialState = {
    listAccount:[]
}
const adminSlice = createSlice({
    name:'account',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder.addCase(getAccount.fulfilled,(state, {payload})=>{
            state.account=payload.account
            console.log(payload)
        })
    }
})
export default adminSlice.reducer