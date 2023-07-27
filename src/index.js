import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import App from './Weather';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer>
      This page was coded by Mercy Cherop using{" "}
      <a href="https://github.com/MercyCherop/react-weather-app">
        open-source code
      </a>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
