import React from 'react';
import Modal from '../modal/Modal';
import { useUserList } from './useUserList';
import './index.scss';

const UsersList = ({ users }) => {
    const { activeModal, albums, handleClickPosts, handleClickAlbums, setActiveModal } = useUserList();

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
                    <div className="album-container" key={album.id}>
                        <p>{album.title}</p>
                    </div>
                ))}
            </Modal>
        </>
    );
};

export default UsersList;
