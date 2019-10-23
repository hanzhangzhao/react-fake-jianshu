import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style.js';
import store from './store';

function App() {
	return (
		<>
			<GlobalStyle />
			<Provider store={store}>
				<Header />
				<BrowserRouter>
					<Route path='/'></Route>
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
