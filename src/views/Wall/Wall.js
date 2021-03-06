import React, { useState, useEffect } from 'react';
// import { getPostsLS } from '../../resources/posts.js';
import postUtils from '../../utils/postUtils.js';
import Post from '../Post/Post.js';
import './Wall.css';

export default function Wall() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const newPosts = postUtils.getPostsLS();
        setPosts([...newPosts]);
    }, []);

    return (
        <div className="Wall" data-testid="feed-wall">
            {posts.map(post =>
                <Post key={post.id} id={post.id}/>
            )}
        </div>
    );
}
