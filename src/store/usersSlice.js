import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    users: [],
};

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { setUsers } = usersSlice.actions;

export const getUsers = () => async dispatch => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(setUsers(data));
};

export default usersSlice.reducer;
