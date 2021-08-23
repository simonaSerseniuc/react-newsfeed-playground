import users from '../resources/users.js';
import { findIndex } from 'lodash';

export const getUserById = id => users[findIndex(users, { id: id})];

export const getLocaleDate = date => new Date(date).toLocaleDateString();

export const getLocaleDateTime = date => {
    const timeDate = new Date(date);
    return `${timeDate.toLocaleDateString()} ${timeDate.toLocaleTimeString().slice(0,5)}`;
}

export const setPostLoadedComments = (id, total) => {
    const loaded = JSON.parse(localStorage.getItem('loadedComments'));
    localStorage.setItem('loadedComments', JSON.stringify({
        ...loaded,
        [id]: total,
    }));
};

export const getPostLoadedComments = id => {
    return (JSON.parse(localStorage.getItem('loadedComments')) || {})[id] || 0;
};
