import React, { useState, useEffect } from 'react';
import { getPostsLS } from '../../resources/posts.js';
import Post from '../Post/Post.js';
import './Wall.css';

export default function Wall() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const newPosts = getPostsLS();
        setPosts(prevPosts => [...newPosts]);
    }, []);

    return (
        <div className="Wall">
            {posts.map(post =>
                <Post key={post.id} id={post.id}/>
            )}
        </div>
    );
}


