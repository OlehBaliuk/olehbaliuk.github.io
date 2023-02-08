import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from '../../components/usersList/UsersList';
import { getUsers } from '../../store/usersSlice';

const MainPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <>
            <UsersList users={users} />
        </>
    );
};

export default MainPage;
