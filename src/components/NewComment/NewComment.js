import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewComment.css';

function NewComment({ send }) {
    const [text, setText] = useState('');

    const handleChange = ({ target }) => {
        setText(target.value);
    };

    const handleOnClick = () => {
        send(text);
        setText('');
    }

    return (
        <div className="NewComment">
            <input className="NewComment-input"
                placeholder="Tell me something"
                value={text}
                onChange={handleChange}
                data-testid="feed-new-comment-input"
            />
            <button className="NewComment-send-btn"
                onClick={handleOnClick}
                data-testid="feed-new-comment-send-button"
            >
                <i className="fas fa-paper-plane"></i>
            </button>
        </div>
    );
}

NewComment.propTypes = {
    send: PropTypes.func.isRequired
};

export default NewComment;
