import PropTypes from 'prop-types';
import './PostInfo.css';
import { getLocaleDate } from '../../utils/utils.js';

function PostInfo({ postInfo, user }) {
    return (
        <div>
            <span className="PostInfo-text">{postInfo.text}</span>
            <img
                className="PostInfo-image"
                src={postInfo.image}
                alt=""
            />
            <div className="PostInfo-footer">
                <span className="PostInfo-user">{`${user.firstName} ${user.lastName}`}</span>
                <span className="PostInfo-date">{getLocaleDate(postInfo.date)}</span>
            </div>
        </div>
    );
}

PostInfo.propTypes = {
    postInfo: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}


export default PostInfo;
