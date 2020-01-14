import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import App from './App';
import { ContextProvider } from '../context/context';

describe('Basic test', () => {
  test('Test click on the button and change the state', () => {
    const { debug, getByText } = render(
      <ContextProvider>
        <App title={'Hello'} />
      </ContextProvider>,
    );

    const increaseButton = getByText('Increase');
    const pTag = getByText('0');

    fireEvent.click(increaseButton);
    expect(pTag.textContent).toBe('1');
  });
});
