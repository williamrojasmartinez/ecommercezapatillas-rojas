import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBNpULC2CMI-UgE-zJ6YdnnafO42ffTFGE",
  authDomain: "ecommerce-worm.firebaseapp.com",
  projectId: "ecommerce-worm",
  storageBucket: "ecommerce-worm.appspot.com",
  messagingSenderId: "700793274965",
  appId: "1:700793274965:web:0ef0c0b5d1d86d14e14adc"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


