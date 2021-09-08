import { render, screen, fireEvent } from '@testing-library/react';
import { getLocaleDateTime } from '../../utils/utils.js';
import Comment from './Comment';

test('Comment renders', () => {
    const comment = {
        user: 'Jhon Doe',
        date: new Date(1,6,2021),
        text: 'some comment text'
    };

    render(<Comment comment={comment}/>);
    expect(screen.getByTestId('feed-comment-user')).toHaveTextContent(comment.user);
    expect(screen.getByTestId('feed-comment-date')).toHaveTextContent(getLocaleDateTime(comment.date));
    expect(screen.getByTestId('feed-comment-text')).toHaveTextContent(comment.text);

});
