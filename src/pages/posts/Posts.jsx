import React from 'react';
import Post from '../../components/post/Post';
import './index.scss';
import { usePosts } from './usePosts';

const Posts = () => {
    const { posts } = usePosts();

    return (
        <>
            <h1 className="posts-title">Posts</h1>
            {posts?.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </>
    );
};

export default Posts;
