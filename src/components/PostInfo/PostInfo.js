import React from 'react';
import PropTypes from 'prop-types';
import './PostInfo.css';
import { getLocaleDate } from '../../utils/utils.js';

function PostInfo({ postInfo, user }) {
    return (
        <div data-testid="feed-postInfo">
            <span
                className="PostInfo-text"
                data-testid="feed-post-info-text"
            >
                {postInfo.text}
            </span>
            <img
                className="PostInfo-image"
                src={postInfo.image}
                alt=""
                data-testid="feed-post-info-img"
            />
            <div className="PostInfo-footer">
                <span
                    className="PostInfo-user"
                    data-testid="feed-post-info-user"
                >
                    {`${user.firstName} ${user.lastName}`}
                </span>
                <span
                    className="PostInfo-date"
                    data-testid="feed-post-info-date"
                >
                    {getLocaleDate(postInfo.date)}
                </span>
            </div>
        </div>
    );
}

PostInfo.propTypes = {
    postInfo: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}


export default PostInfo;
