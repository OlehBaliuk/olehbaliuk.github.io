import React from 'react';
import UsersList from '../../components/usersList/UsersList';
import { useMainPage } from './useMainPage';

const MainPage = () => {
    const { users } = useMainPage();

    return <UsersList users={users} />;
};

export default MainPage;
