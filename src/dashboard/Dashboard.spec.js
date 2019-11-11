// Test away
/* spec
- shows the controls and display
*/

//Get our test library imported
import React from 'react';
import { cleanup, render } from 'react-testing-library';

//Import the component to test
import Dashboard from './Dashboard';

//Unmount and cleanup dom after test is done.
afterEach(cleanup);

describe('<Dashboard />', () => {
  it('renders controls and display component', () => {
    // const { getByText } = render(<Dashboard />);
    const wrapper = render(<Dashboard />);

    // const displayDiv = wrapper.container.querySelector('.some-display'); //Sanity check, returns null since no element with class exists, fails test.
    const displayDiv = wrapper.container.querySelector('.display');

    expect(displayDiv).toBeTruthy();

    // const controlsDiv = wrapper.container.querySelector('.wrong-controls'); //Sanity check
    const controlsDiv = wrapper.container.querySelector('.controls');

    expect(controlsDiv).toBeTruthy();
  });
});