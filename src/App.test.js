// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LidoStake title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LidoStake/i);
    expect(titleElement).toBeInTheDocument();
});
