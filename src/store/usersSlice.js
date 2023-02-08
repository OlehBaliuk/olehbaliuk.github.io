import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api/api';

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
    const response = await api.getUsers();
    dispatch(setUsers(response));
};

export default usersSlice.reducer;
