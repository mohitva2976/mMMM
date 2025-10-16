import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome heading with student name', () => {
  render(<App />);
  const heading = screen.getByText(/welcome,\s*rahul sharma/i);
  expect(heading).toBeInTheDocument();
});
