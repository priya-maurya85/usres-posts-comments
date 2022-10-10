import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserActions } from '../features/UsersSlice';
import { appDispatch, rootState } from '../store'

const useAppDispatch:() => appDispatch = useDispatch;
const User = () => {
  const {users:usersList} = useSelector((state:rootState) => state.usersData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserActions());
  }, []);
  return (
    <>
    <h2>This is User detail component</h2>
    {usersList && usersList.map((users) => <li>{users.username}</li>)}
    </>
  )
}

export default User