import React from 'react';
import Post from '../../components/post/Post';
import Preloader from '../../components/preloader/Preloader';
import './index.scss';
import { usePosts } from './usePosts';

const Posts = () => {
    const { posts, loading } = usePosts();

    return loading ? (
        <Preloader />
    ) : (
        <>
            <h1 className="posts-title">Posts</h1>
            {posts?.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </>
    );
};

export default Posts;
