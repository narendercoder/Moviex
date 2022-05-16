import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
    <img className="logo" src="Moviex.png" alt=""/>
      <span className="logo_name">oviex</span>
    </span>
  );
};

export default Header;
