import React from 'react'
import { Provider } from 'react-redux'
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

import { createStore } from 'redux';
import reducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { myReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });
});