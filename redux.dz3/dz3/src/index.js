import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/store';
import { createStore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store =  createStore (rootReducer)
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

