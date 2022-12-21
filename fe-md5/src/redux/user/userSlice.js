import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../services/userServices";

const initialState = {
    currentUser: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload.data
            localStorage.setItem("idUser",action.payload.data.idUser)
        })
    }
})
export default userSlice.reducer