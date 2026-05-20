import React from "react";
import Nav from "./Nav/Nav";

const Header = () => {
  return ( 
  <header className="header">
    <div className="header_inner">
      <a href="#hero" className="header_logo">
        ~/miguel/portfolio
      </a>

      <Nav/>

      <a 
      href=""
      className="header_resumeBtn"
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
