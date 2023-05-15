import 'react-native';
import React from 'react';
import App from '../App';

import { render, fireEvent } from '@testing-library/react-native';

describe('App component', () => {
  it('renders correctly', () => {
    render(<App />);
  });

  it('navigates to the Post screen when the Post button is pressed', () => {
    const { getByText } = render(<App />);
    const postButton = getByText('Post');

    fireEvent.press(postButton);

    expect(getByText('Add a post')).toBeDefined();
  });

  // wont work till map is updated
  // it('navigates to the Map screen when the Map button is pressed', () => {
  //   const { getByText } = render(<App />);
  //   const mapButton = getByText('Map');
  //
  //   fireEvent.press(mapButton);
  //
  //   expect(getByText('Map')).toBeDefined();
  // });
});
