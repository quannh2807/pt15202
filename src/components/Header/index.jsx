import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <nav className="">
        <Link to="/" className="px-5 text-gray-600 hover:text-gray-700">Home</Link>
        <Link to="/posts" className="px-5 text-gray-600 hover:text-gray-700">List post</Link>
        <Link to="/create-post" className="px-5 text-gray-600 hover:text-gray-700">Cerate post</Link>
      </nav>

      <div>
        <a href="/" className="logo">
          intensify
        </a>
      </div>

      <nav className="right">
        <a href="/#" className="button alt">
          Log in
        </a>
      </nav>
    </header>
  );
};

export default Header;
