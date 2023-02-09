import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api/api';

export const usePosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { userId } = useParams();

    const getPosts = async () => {
        try {
            setLoading(true);
            const response = await api.getPosts(userId);
            setPosts(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return { posts, loading };
};
