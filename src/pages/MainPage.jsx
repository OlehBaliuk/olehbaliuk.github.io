import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../components/modal/Modal';
import UsersList from '../components/usersList/UsersList';

const MainPage = () => {
    const [users, setUsers] = useState(null);
    const [activeModal, setActiveModal] = useState(false);

    const getUsers = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <UsersList users={users} />
            <Modal />
        </>
    );
};

export default MainPage;
