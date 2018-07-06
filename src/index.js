import React from 'react';
import ReactDOM from 'react-dom';
import { Provider , connect } from 'react-redux';
import { createStore, applyMiddleware , combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App.js';
import thunkMiddleware from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

import { searchRobots,requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(
<Provider store={store} >
	<App />
	</Provider>, document.getElementById('root'));

//ReactDOM.render(<App robots={robots}/>, document.getElementById('root'));
registerServiceWorker();