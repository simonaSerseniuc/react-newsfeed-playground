import React, { Component } from 'react';
import { getPostsLS } from '../../resources/posts.js';
import Post from '../Post/Post.js';
import './Wall.css';

export default class Wall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        const posts = getPostsLS();
        this.setState({
            ...this.state,
            posts,
        })
    }

    render () {
        const { posts = {} } = this.state;

        return (
            <div className="Wall">
                {posts.map(post =>
                    <Post key={post.id} id={post.id}/>
                )}
            </div>
        );
    }
}


