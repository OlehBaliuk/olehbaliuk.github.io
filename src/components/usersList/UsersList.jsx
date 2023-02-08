import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const UsersList = ({ users }) => {
    return (
        <>
            <h1 className="user-title">Users</h1>
            <ul className="users-list">
                {users?.map(user => (
                    <li key={user.id} className="user-item">
                        <p>{user.name}</p>
                        <Link to="/"> posts</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UsersList;
