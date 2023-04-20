import React from 'react';
import App from "./App"
import {Routes, Route} from "react-router-dom";
import Page1 from "./Pages/Page1";

const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/page1" element={<Page1/>}></Route>
      </Routes>
    </div>
  );
};

export default MainPage;