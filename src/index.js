import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather defaultcity="Gaborone" />
    <footer>
      This page was coded by Mercy Cherop, is open-sourced on{" "}
      <a href="https://github.com/MercyCherop/react-weather-app">github</a> and
      hosted on Netlify.
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
