import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

const Main = () => {
  return ( 
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>    
  </main> 
  );
};

export default Main;
