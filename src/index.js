import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter baseName={process.env.PUBLIC_URL}>

        <App />

    </BrowserRouter>
);

reportWebVitals(console.log);
