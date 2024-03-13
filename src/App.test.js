import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//TODO resolve the ForwardRef Warnings
test('renders my name and a download link', () => {
  render(<App />);
  expect(screen.getByText(/David Kear:/i)).toBeInTheDocument();
  expect(screen.getByText(/Download PDF/)).toBeInTheDocument()
});

test('should navigate to pdf download when link is clicked', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Download PDF' })).toHaveAttribute('href', 'DKearResume.pdf')
});
