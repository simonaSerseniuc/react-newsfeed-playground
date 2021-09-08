import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import PostInfo from '../../components/PostInfo/PostInfo.js';
import Comment from '../../components/Comment/Comment.js';
import NewComment from '../../components/NewComment/NewComment.js';
import { getUserById } from '../../utils/utils.js';
import postUtils from '../../utils/postUtils.js';
import './Post.css';

export default class Post extends Component {
    constructor(props) {
        super(props);
        const post = postUtils.getPostById(props.id) || {};
        this.state = {
            user: getUserById(post.user),
            loaded: 5,
            showComments: false,
            recentComments: false,
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
        const { post, recentComments } = this.state;
        const order = recentComments ? 'desc' : 'asc';

        postUtils.addPostCommentLS(id, text);

        const comments = [
            ...post.comments || [],
            {
                date: new Date(),
                user: 'anonymous',
                text
            }
        ];

        this.setState({
            ...this.state,
            post: {
                ...post,
                comments: orderBy(comments, (comment) => new Date(comment.date), [order])
            }
        });
    };

    sortMostRecent = (order) => {
        const { post } = this.state;
        const comments = orderBy(post.comments, (comment) => new Date(comment.date), [order]);

        this.setState((prevState) => {
            return {
                ...prevState,
                post: {
                    ...post,
                    comments
                },
                recentComments: !prevState.recentComments
            }
        });
    };

    render () {
        const { post, user, loaded, showComments, recentComments } = this.state;
        const sortOrder = recentComments ? 'asc' : 'desc';
        const sortText = recentComments ? 'Most recent' : 'All comments';

        return (
            <div className="Post" data-testid="feed-post">
                <PostInfo
                    postInfo={post}
                    user={user || {}}
                    data-testid="feed-post-info"
                />

                <div className="Post-comments-header" data-testid="feed-post-header">
                    <div className="Post-comments-toggle" onClick={this.toggleComments}>
                        Comments
                        { showComments ?
                            <i className="fas fa-chevron-up"></i>
                            : <i className="fas fa-chevron-down"></i>
                        }
                    </div>
                    <div>
                        <button
                            className="Post-btn"
                            onClick={() => this.sortMostRecent(sortOrder)}
                        >
                            {sortText}
                            { recentComments ?
                                <i className="fas fa-chevron-up"></i>
                                : <i className="fas fa-chevron-down"></i>
                            }
                        </button>
                    </div>

                </div>
                {
                    showComments ?
                        <div>
                            <div className="Post-comments">
                                {post.comments.map((comment, index) => {
                                    if (index < loaded) {
                                        return <Comment comment={comment} key={index}/>
                                    }

                                    return null;
                                })}
                            </div>
                            {
                                loaded <= post.comments.length-1 ?
                                    <button className="Post-btn Post-btn-more"
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
