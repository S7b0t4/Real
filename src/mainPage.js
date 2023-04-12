import React from 'react';
import App from "./App"
import {Routes, Route} from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";

const MainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/page1" element={<Page1/>}></Route>
        <Route path="/page2" element={<Page2/>}></Route>
      </Routes>
    </div>
  );
};

export default MainPage;