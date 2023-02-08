import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api/api';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const { userId } = useParams();

    const getPosts = async () => {
        const response = await api.getPosts(userId);
        setPosts(response);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return { posts };
};
