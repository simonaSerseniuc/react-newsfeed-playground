import { render, screen, fireEvent } from '@testing-library/react';
import NewComment from './NewComment';

test('NewComment renders', () => {
    const send = () => {};

    render(<NewComment send={send}/>);
    expect(screen.getByPlaceholderText(/tell me something/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
});

test('NewComment write into textarea', () => {
    const send = () => {};
    const text = 'a new comment';

    render(<NewComment send={send}/>);
    // screen.logTestingPlaygroundURL();
    fireEvent.change(screen.getByTestId('feed-new-comment-input'), {target: {value: text}});
    expect(screen.getByDisplayValue(text)).toBeInTheDocument();
});

test('NewComment handles send button', () => {
    const send = jest.fn();

    render(<NewComment send={send}/>);
    fireEvent.click(screen.getByRole('button'));
    expect(send).toHaveBeenCalledTimes(1)
});
