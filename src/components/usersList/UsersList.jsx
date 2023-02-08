import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/Modal';
import './index.scss';

const UsersList = ({ users }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [albums, setAlbums] = useState([]);
    let navigate = useNavigate();

    const handleClickPosts = user => {
        navigate(`/posts/${user.id}`);
    };

    const handleClickAlbums = async user => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`);
        setAlbums(data);
        setActiveModal(true);
    };

    return (
        <>
            <h1 className="users-title">Users</h1>
            <ul className="users-list">
                {users?.map(user => (
                    <li key={user.id} className="user-item">
                        <p>{user.name}</p>
                        <div className="buttons-wrapper">
                            <button onClick={() => handleClickPosts(user)} className="button">
                                posts
                            </button>
                            <button onClick={() => handleClickAlbums(user)} className="button">
                                albums
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <Modal active={activeModal} setActive={setActiveModal}>
                <h1>Albums</h1>
                {albums?.map(album => (
                    <div className="album-container">
                        <p>{album.title}</p>
                    </div>
                ))}
            </Modal>
        </>
    );
};

export default UsersList;
