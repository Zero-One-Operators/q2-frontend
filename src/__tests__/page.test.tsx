import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import '@testing-library/jest-dom';

describe('Home Component', () => {
  test('renders the heading correctly', () => {
    render(<Page />);

    // Check if the Typography text is present
    const headingElement = screen.getByText(/Q2 app with Material UI!!/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the Button correctly', () => {
    render(<Page />);

    // Check if the button text is present
    const buttonElement = screen.getByRole('button', { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('MuiButton-contained');
  });

  test('button has correct variant and color', () => {
    render(<Page />);

    const buttonElement = screen.getByRole('button', { name: /Click Me/i });
    
    // Ensures it's a contained button
    expect(buttonElement).toHaveClass('MuiButton-contained'); 
    
    // Instead of checking for color classes, check for the variant and color props.
    expect(buttonElement).toHaveAttribute('class', expect.stringContaining('MuiButton-contained'));
    expect(buttonElement).toHaveAttribute('class', expect.stringContaining('MuiButton-containedPrimary'));
  });
});
