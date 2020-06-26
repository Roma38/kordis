import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from "axios";

import store from "./redux";
import './index.css';
import App from './App';

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);