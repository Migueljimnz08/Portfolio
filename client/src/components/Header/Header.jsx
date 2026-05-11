import React from "react";
import Nav from "./Nav/Nav";

const Header = () => {
  return ( 
  <header className="header">
    <div className="inner">
      <a href="#hero" className="logo">
        ~/miguel/portfolio
      </a>

      <Nav/>

      <a 
      href=""
      className="resumeBtn"
      target="_blank"
      rel="noopener noreferrer"
      >
        Resume
      </a>
    </div>    
  </header> 
  );
};

export default Header;
