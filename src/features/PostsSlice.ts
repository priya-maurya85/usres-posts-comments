import {createAsyncThunk, createSlice, PayloadAction}  from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostActions = createAsyncThunk("posts/postsActions", 
async() => {
    const response = await axios.get("https://dummyjson.com/posts");
    return response.data.posts;
});


interface postsObj  {
    id: number;
    title: string;
}
interface initialStateI  {
    posts: postsObj[];
    loading: boolean;
}

const initialState = {
    posts: [],
    loading: true
} as initialStateI;

const PostsSlice = createSlice({
name: "posts",
initialState,
reducers: {},
extraReducers: (builder) => {
    builder.addCase(fetchPostActions.fulfilled, (state, action:PayloadAction<postsObj[]>) => {
        state.posts= action.payload;
    })

}


})

export default PostsSlice.reducer;