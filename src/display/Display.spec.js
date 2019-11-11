// Test away!
/* spec
- displays if gate is open/closed and if it is locked/unlocked
- displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
- displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
- when `locked` or `closed` use the `red-led` class
- when `unlocked` or `open` use the `green-led` class
*/

//Get our test library imported
import React from 'react';
import { cleanup, render, todo, getByText } from 'react-testing-library';

//Import the component to test
import Display from './Display';

//Unmount and cleanup dom after test is done.
afterEach(cleanup);

describe('<Display />', () => {
  it('displays correct text for gate and lock state', () => {
    const lockedProps = { closed: true, locked: true }

    const { getByText, rerender } = render(<Display />);

    const lockState = getByText(/Unlocked/);
    const gateState = getByText(/Open/);

    rerender(<Display {...lockedProps} />);

    // expect(lockState.textContent).toBe('Unlocked'); //Sanity check
    expect(lockState.textContent).toBe('Locked');
    expect(gateState.textContent).toBe('Closed');
  });

  it('uses the correct classes to reflect state', () => {
    const lockedProps = { closed: true, locked: true }

    const { getByText, rerender } = render(<Display />);

    const lockState = getByText(/Unlocked/);
    const gateState = getByText(/Open/);

    expect(lockState.classList.value).toContain('green-led');
    expect(gateState.classList.value).toContain('green-led');

    rerender(<Display {...lockedProps} />);

    // expect(lockState.classList.value).toContain('green-led'); //Sanity check
    expect(lockState.classList.value).toContain('red-led');
    expect(gateState.classList.value).toContain('red-led');
  })
});