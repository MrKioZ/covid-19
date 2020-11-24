import React from "react";
import ReactDOM from "react-dom";
import App from './app';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers/index';

import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById("root")
);