import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import  logger from "redux-logger";
import thunk from "redux-thunk"
import { rootReducers } from './redux/reducers/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore (rootReducers, applyMiddleware(thunk, logger))
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

