import React from "react";

const Menu = () => {
  return (
    <nav id="menu">
      <ul className="links">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="generic.html">Generic</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="/#" className="button fit">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
