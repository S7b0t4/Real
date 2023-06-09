import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from "./mainPage";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </React.StrictMode>
);