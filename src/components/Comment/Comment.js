import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import { getLocaleDateTime } from '../../utils/utils.js';

function Comment({ comment }) {
    return (
        <div className="Comment">
            <div className="Comment-header">
                <span className="Comment-user"
                    data-testid="feed-comment-user"
                >
                    {comment.user}
                </span>
                <span className="Comment-date"
                    data-testid="feed-comment-date"
                >
                    {getLocaleDateTime(comment.date)}
                </span>
            </div>
            <div className="Comment-text"
                data-testid="feed-comment-text"
            >
                {comment.text}
            </div>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
}


export default Comment;
