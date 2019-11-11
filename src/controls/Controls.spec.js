// Test away!
/* spec
- provide buttons to toggle the `closed` and `locked` states.
- buttons' text changes to reflect the state the door will be in if clicked
- the closed toggle button is disabled if the gate is locked
- the locked toggle button is disabled if the gate is open
*/

//Get our test library imported
import React from 'react';
import 'jest-dom';
import { cleanup, render, fireEvent } from 'react-testing-library';

//Import the component to test
import Controls from './Controls';

//Unmount and cleanup dom after test is done.
afterEach(cleanup);

describe('<Controls />', () => {
  it('has buttons for open/close & lock/unlock', () => {
    const mockProps = { locked: false, closed: false };

    const { getByText } = render(<Controls {...mockProps} />);

    // expect(getByText(/Unlock Gate/i)).toBeTruthy(); //Sanity check
    expect(getByText(/Close Gate/)).toBeTruthy();
    expect(getByText(/Lock Gate/)).toBeTruthy();
  });

  it('sets correct button text and disabled state to reflect gate state', () => {
    const mockPropsClosed = { locked: false, closed: true, };
    const mockPropsOpen = { locked: false, closed: false };
    const mockPropsLocked = { locked: true, closed: true };

    //Render a default gate (open and unlocked)
    const { getByText, rerender } = render(<Controls {...mockPropsOpen} />);

    const toggleLock = getByText(/Lock Gate/);
    const toggleGate = getByText(/Close Gate/);

    expect(toggleLock.disabled).toBe(true);
    expect(toggleGate.disabled).toBe(false);

    expect(toggleLock.textContent).toMatch(/Lock Gate/)
    expect(toggleGate.textContent).toMatch(/Close Gate/)

    //Render a closed and unlocked gate.
    rerender(<Controls {...mockPropsClosed} />);

    // expect(toggleLock.disabled).toBe(true); //Sanity check
    expect(toggleLock.disabled).toBe(false);
    expect(toggleGate.disabled).toBe(false);

    // expect(toggleLock.textContent).toMatch(/Unlock Gate/i); //Sanity check
    expect(toggleLock.textContent).toMatch(/Lock Gate/)
    expect(toggleGate.textContent).toMatch(/Open Gate/)

    //Render a closed and locked gate.
    rerender(<Controls {...mockPropsLocked} />);

    expect(toggleLock.disabled).toBe(false);
    expect(toggleGate.disabled).toBe(true);

    // expect(toggleLock.textContent).toMatch(/Lock Gate/); //Sanity check
    expect(toggleLock.textContent).toMatch(/Unlock Gate/);
    expect(toggleGate.textContent).toMatch(/Open Gate/);
  });
});