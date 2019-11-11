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
    const mockProps = {
      locked: false,
      closed: false,
      toggleLocked: null,
      toggleClosed: null
    }

    const { getByText } = render(<Controls {...mockProps} />);

    // expect(getByText(/Unlock Gate/i)).toBeTruthy(); //Sanity check
    expect(getByText(/Close Gate/i)).toBeTruthy();
    expect(getByText(/Lock Gate/i)).toBeTruthy();
  });
});