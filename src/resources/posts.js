import stars from './stars.jpeg';
import trafic from './trafic.jpeg';
import { findIndex } from 'lodash';

export const getPostsLS = () => {
    const posts = JSON.parse(localStorage.getItem('feedPosts'));

    if (!posts) {
        localStorage.setItem('feedPosts', JSON.stringify(feedPosts));
        return feedPosts;
    }

    return posts;
};

export const getPostById = (id) => {
    const feedPosts = JSON.parse(localStorage.getItem('feedPosts'));
    return feedPosts[findIndex(feedPosts, { id: id })];
};

export const addPostCommentLS = (postId, text) => {
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

const feedPosts = [
    {
        id: '2149ti10qfgead',
        text: 'What an amazing galaxy!',
        image: stars,
        date: new Date(2012, 6, 20, 11, 40),
        user: '38dkwo9fj24',
        comments: [
            {
                date: new Date(2012, 6, 20, 12, 0),
                text: 'first comment',
                user: 'valentinv'
            },
            {
                date: new Date(2012, 6, 20, 12, 1),
                text: 'second comment',
                user: 'alinag'
            },
            {
                date: new Date(2012, 6, 20, 12, 3),
                text: 'third comment',
                user: 'valentinv'
            },
            {
                date: new Date(2012, 6, 20, 12, 6),
                text: 'forth comment',
                user: 'alinag'
            },
            {
                date: new Date(2012, 6, 20, 12, 10),
                text: 'fifth comment',
                user: 'valentinv'
            },
            {
                date: new Date(2012, 6, 20, 12, 12),
                text: 'sixth comment',
                user: 'alinag'
            },
            {
                date: new Date(2012, 6, 20, 12, 20),
                text: 'seventh comment',
                user: 'valentinv'
            },
            {
                date: new Date(2012, 6, 20, 12, 25),
                text: 'eighth comment',
                user: 'alinag'
            },
            {
                date: new Date(2012, 6, 20, 12, 30),
                text: 'nineth comment',
                user: 'valentinv'
            }
        ]
    },
    {
        id: '3124r3oefpjopjopw',
        text: 'Having highways must be delightful.',
        image: trafic,
        date: new Date(2012, 6, 21, 10, 20),
        user: 'hd82904080042u',
        comments: [
            {
                date: new Date(2012, 6, 22, 12, 0),
                text: 'first comment',
                user: 'valentinv'
            },
            {
                date: new Date(2012, 6, 22, 11, 0),
                text: 'second comment',
                user: 'alinag'
            }
        ]
    }
];
