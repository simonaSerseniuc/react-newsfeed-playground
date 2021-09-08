import { render, screen } from '@testing-library/react';
import Wall from './Wall';

test('renders Wall data', () => {
  render(<Wall />);
  // screen.logTestingPlaygroundURL();
  expect(screen.getAllByTestId('feed-post').length).toEqual(2);
});
