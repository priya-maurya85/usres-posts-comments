import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUserActions = createAsyncThunk("user/userActions",
async()=>{
    const response = await axios.get("https://dummyjson.com/users");
    return response.data.users;
})

interface userObj {
    id: number;
    name: string;
    username: string;
}

interface initialStateI {
    users: userObj[];
    loading: boolean;
}

const initialState = {
    users: [],
    loading: true
} as initialStateI;

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserActions.pending,(state) => {
            state.loading = true;
        })
        .addCase(fetchUserActions.fulfilled, (state, action:PayloadAction<userObj[]>) => {
            state.loading = false; 
            state.users = action.payload;
        })
    }

})

export default userSlice.reducer;