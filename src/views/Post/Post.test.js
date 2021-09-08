import { render, screen } from '@testing-library/react';
import Post from './Post';

test('renders Post renders', () => {
  render(<Post id='13'/>);
  // screen.logTestingPlaygroundURL();
  expect(screen.getAllByTestId('feed-postInfo').length).toEqual(1);
  expect(screen.getByRole('button', { name: /all comments/i })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/tell me something/i)).toBeInTheDocument();
});
