import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "./styles.css"
import { App } from './app/app';
import { store } from './redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
