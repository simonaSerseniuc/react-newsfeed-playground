import { render, screen, within } from '@testing-library/react';
import { getLocaleDate } from '../../utils/utils.js';
import PostInfo from './PostInfo';

test('renders PostInfo renders with data', () => {
    const post = {
        text: 'Some text',
        image: '',
        date: new Date(13, 2, 2021)
    };

    const user = {
        firstName: 'Jane',
        lastName: 'Doe'
    };

    render(<PostInfo postInfo={post} user={user}/>);
    // screen.logTestingPlaygroundURL();
    expect(screen.getByTestId('feed-post-info-text')).toHaveTextContent(post.text);
    expect(screen.getByTestId('feed-post-info-user')).toHaveTextContent(`${user.firstName} ${user.lastName}`);
    expect(screen.getByTestId('feed-post-info-date')).toHaveTextContent(getLocaleDate(post.date));
});
