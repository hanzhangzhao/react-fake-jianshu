import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style.js';
import Home from './pages/Home/HomeComponent';
import Blog from './pages/BlogComponent';
import store from './store';

function App() {
	return (
		<>
			<GlobalStyle />
			<Provider store={store}>
				<Header />
				<BrowserRouter>
					<Route path="/" exact component={Home} />
					<Route path="/blog" exact component={Blog} />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
