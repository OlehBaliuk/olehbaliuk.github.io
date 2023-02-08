import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Post from '../../components/post/Post';
import './index.scss';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const { userId } = useParams();

    const getPosts = async () => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        setPosts(data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <h1 className="posts-title">Posts</h1>
            {posts?.map(post => (
                <Post post={post} />
            ))}
        </>
    );
};

export default Posts;
