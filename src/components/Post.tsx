import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostActions } from '../features/PostsSlice';
import { appDispatch, rootState } from '../store'

const useAppDispatch: () => appDispatch = useDispatch;

const Post = () => {
    const {posts} = useSelector((state:rootState)=>state.postsData);
    
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchPostActions())
    },[]);
    console.log("value of the posts", posts);
    
  return (
   <>
   <h3>These are the posts</h3>
   {posts && posts.map((post) => <li>{post.title}</li>)}
   </>
  )
}

export default Post