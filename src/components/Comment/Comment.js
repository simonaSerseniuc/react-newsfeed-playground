import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';
import { getLocaleDateTime } from '../../utils/utils.js';

function Comment({ comment }) {
    return (
        <div className="Comment">
            <div className="Comment-header">
                <span className="Comment-user">{comment.user}</span>
                <span className="Comment-date">{getLocaleDateTime(comment.date)}</span>
            </div>
            <div className="Comment-text">{comment.text}</div>
        </div>
    );
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
}


export default Comment;
