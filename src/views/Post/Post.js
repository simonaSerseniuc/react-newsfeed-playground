import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostInfo from '../../components/PostInfo/PostInfo.js';
import Comment from '../../components/Comment/Comment.js';
import NewComment from '../../components/NewComment/NewComment.js';
import { getUserById, getLocaleDate } from '../../utils/utils.js';
import { addPostCommentLS, getPostById } from '../../resources/posts.js';
import './Post.css';

export default class Post extends Component {
    constructor(props) {
        super(props);
        const post = getPostById(props.id);

        this.state = {
            user: getUserById(post.user),
            loaded: 5,
            showComments: false,
            post
        };
    }

    toggleComments = () => {
        const { showComments = false } = this.state;
        this.setState({
            ...this.state,
            showComments: !showComments
        });
    };

    loadMoreComments = () => {
        this.setState({
            ...this.state,
            loaded: this.state.loaded + 5
        });
    };

    sendComment = (text) => {
        const { id } = this.props;
        const { post } = this.state;
        addPostCommentLS(id, text);
        this.setState({
            ...this.state,
            post: {
                ...post,
                comments: [
                    ...post.comments || [],
                    {
                        date: new Date(),
                        user: 'anonymous',
                        text
                    }
                ]
            }
        });
    };

    render () {
        const { post, user, loaded, showComments } = this.state;

        return (
            <div className="Post">
                <PostInfo
                    postInfo={post}
                    user={user}
                />

                <div className="Post-comments-header"
                    onClick={this.toggleComments}
                >
                    Comments
                    { showComments ?
                        <i className="fas fa-chevron-up"></i>
                        : <i className="fas fa-chevron-down"></i>
                    }
                </div>
                {
                    showComments ?
                    <div>
                        <div className="Post-comments">
                            {post.comments.map((comment, index) => {
                                if (index < loaded)  {
                                    return <Comment comment={comment} key={index}/>
                                }

                                return null;
                            })}
                        </div>
                        {
                            loaded <= post.comments.length-1 ?
                                <button className="Post-more-btn"
                                    onClick={this.loadMoreComments}
                                >
                                    More <i className="fas fa-chevron-down"></i>
                                </button> : null
                        }
                        </div>
                    : null
                }
                <NewComment
                    send={this.sendComment}
                />
            </div>
        );
    }
}

Post.propTypes = {
    id: PropTypes.string.isRequired
}
