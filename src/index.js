import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/app/Home';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
);

/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import Apple from './components/app/app';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Apple />
        </BrowserRouter>
    </React.StrictMode>,
);

*/
