import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from './style.js';
import Home from './pages/Home/HomeComponent';
import Blog from './pages/Blog/BlogComponent';
import Login from './pages/Login/LoginComponent';
import store from './store';

function App() {
	return (
		<>
			<GlobalStyle />
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/blog/:id" exact component={Blog} />
					<Route path="/login" exact component={Login} />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
