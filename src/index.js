import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClnMv-1IqMCiyU2MiZQo6sVOhM7QxUlQc",
  authDomain: "ecommerce-ollian.firebaseapp.com",
  projectId: "ecommerce-ollian",
  storageBucket: "ecommerce-ollian.appspot.com",
  messagingSenderId: "38639654789",
  appId: "1:38639654789:web:3ed9d978272eafec4e56ec"
};

initializeApp(firebaseConfig);

const divRoot = document.getElementById('root');

const root = ReactDOM.createRoot(divRoot);

root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>

);


reportWebVitals();
