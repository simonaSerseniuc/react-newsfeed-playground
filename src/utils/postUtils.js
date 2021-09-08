import { feedPosts } from '../resources/posts.js';
import { findIndex } from 'lodash';

const getPostsLS = () => {
    const posts = JSON.parse(localStorage.getItem('feedPosts'));

    if (!posts) {
        localStorage.setItem('feedPosts', JSON.stringify(feedPosts));
        return feedPosts;
    }

    return posts;
};

const getPostById = (id) => {
    const feedPosts = JSON.parse(localStorage.getItem('feedPosts'));
    const idx = findIndex(feedPosts, { id: id });
    return idx > -1 ? feedPosts[idx] : null;
};

const addPostCommentLS = (postId, text) => {
    const feedPosts = JSON.parse(localStorage.getItem('feedPosts'));
    const postIdx = findIndex(feedPosts, { id: postId });

    const posts = [
        ...feedPosts.slice(0, postIdx),
        {
            ...feedPosts[postIdx],
            comments: [
                ...feedPosts[postIdx].comments,
                {
                    date: new Date(),
                    user: 'anonymous',
                    text,
                }
            ]
        },
        ...feedPosts.slice(postIdx + 1),
    ];

    localStorage.setItem('feedPosts', JSON.stringify(posts));
}

const setPostLoadedComments = (id, total) => {
    const loaded = JSON.parse(localStorage.getItem('loadedComments'));
    localStorage.setItem('loadedComments', JSON.stringify({
        ...loaded,
        [id]: total,
    }));
};

const getPostLoadedComments = id => {
    return (JSON.parse(localStorage.getItem('loadedComments')) || {})[id] || 0;
};

export default {
    getPostsLS,
    getPostById,
    addPostCommentLS,
    setPostLoadedComments,
    getPostLoadedComments,
};
