import { render, screen, fireEvent } from '@testing-library/react';
import Temp from "../../app/temp/page";
import '@testing-library/jest-dom';


describe('Counter Component', () => {
  test('renders initial counter value', () => {
    render(<Temp />);

    // Ensure that the initial counter value (0) is displayed
    const counterText = screen.getByText(/Counter: 0/i);
    expect(counterText).toBeInTheDocument();
  });

  test('increments the counter when the button is clicked', () => {
    render(<Temp />);

    // Find the button by its aria-label
    const incrementButton = screen.getByLabelText(/increment/i);

    // Fire a click event on the button
    fireEvent.click(incrementButton);

    // Check if the counter value is updated to 1
    const updatedCounterText = screen.getByText(/Counter: 1/i);
    expect(updatedCounterText).toBeInTheDocument();
  });

  test('increments the counter multiple times', () => {
    render(<Temp />);

    const incrementButton = screen.getByLabelText(/increment/i);

    // Click the button twice
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    // Check if the counter value is updated to 2
    const updatedCounterText = screen.getByText(/Counter: 2/i);
    expect(updatedCounterText).toBeInTheDocument();
  });
});
