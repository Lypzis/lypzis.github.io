import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './sass/main.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();