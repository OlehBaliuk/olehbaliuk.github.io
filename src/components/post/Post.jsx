import React from 'react';
import './index.scss';

const Post = ({ post }) => {
    return (
        <div className="post-container">
            <strong>{post.title}</strong>
            <hr />
            <div className="post-body">{post.body}</div>
        </div>
    );
};

export default Post;
