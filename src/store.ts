import {configureStore} from "@reduxjs/toolkit";
import PostsSlice from "./features/PostsSlice";
import UsersSlice from "./features/UsersSlice";


export const store = configureStore({reducer: {usersData: UsersSlice, postsData: PostsSlice}});
export type rootState = ReturnType <typeof store.getState>;
export type appDispatch = typeof store.dispatch;