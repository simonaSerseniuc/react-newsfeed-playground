import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main components', () => {
  render(<App />);
  // screen.logTestingPlaygroundURL();
  expect(screen.getByText(/some header presentation/i)).toBeInTheDocument();
  expect(screen.getAllByTestId('feed-wall').length).toEqual(1);
});
