import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import { ROUTES } from '../../constants/routes';

export const useUserList = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [albums, setAlbums] = useState([]);
    let navigate = useNavigate();

    const handleClickPosts = user => {
        navigate(`${ROUTES.posts}/${user.id}`);
    };

    const handleClickAlbums = async user => {
        try {
            const response = await api.getAlbums(user);
            setAlbums(response);
            setActiveModal(true);
        } catch (error) {
            console.log(error);
        }
    };

    return { activeModal, albums, handleClickPosts, handleClickAlbums, setActiveModal };
};
