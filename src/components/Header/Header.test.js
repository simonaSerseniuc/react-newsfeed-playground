import { render, screen, fireEvent } from '@testing-library/react';
import { getLocaleDateTime } from '../../utils/utils.js';
import Header from './Header';

test('Header renders', () => {
    render(<Header/>);
    expect(screen.getAllByTestId('feed-header-img').length).toEqual(1);
    expect(screen.getByText(/some header presentation/i)).toBeInTheDocument();
});
