import React from "react";

const Header = () => {
  return (
    <header id="header">
      <nav className="left">
        <a href="#menu">
          <span>Menu</span>
        </a>
      </nav>
      <a href="/" className="logo">
        intensify
      </a>
      <nav className="right">
        <a href="/#" className="button alt">
          Log in
        </a>
      </nav>
    </header>
  );
};

export default Header;
