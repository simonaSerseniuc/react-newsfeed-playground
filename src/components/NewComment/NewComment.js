import React from 'react';
import PropTypes from 'prop-types';
import './NewComment.css';

function NewComment({ text, onChange, send }) {
    return (
        <div className="NewComment">
            <input className="NewComment-input"
                placeholder="Tell me something"
                value={text} onChange={onChange}
            />
            <button className="NewComment-send-btn"
                onClick={() => send(text)}
            >
                <i className="fas fa-paper-plane"></i>
            </button>
        </div>
    );
}

NewComment.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    send: PropTypes.func.isRequired
};

export default NewComment;
