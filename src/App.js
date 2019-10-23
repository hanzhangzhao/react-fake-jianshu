import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import store from './store';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </>
  );
}

export default App;
