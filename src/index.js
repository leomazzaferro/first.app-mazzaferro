import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const divRoot = document.getElementById('root');

const root = ReactDOM.createRoot(divRoot);

root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>

);


reportWebVitals();
