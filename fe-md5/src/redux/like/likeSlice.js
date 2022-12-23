import {createSlice} from "@reduxjs/toolkit";
import {addLikes, getLikes} from "../../services/likeService";

const initialState = {
    likes: []
}
const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getLikes.fulfilled, (state, {payload}) => {
            state.likes=payload
        })
        builder.addCase(addLikes.fulfilled,(state, {payload})=>{
            state.likes.push(payload)
        })
    }
})
export default likesSlice.reducer