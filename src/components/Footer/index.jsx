import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="inner">
        <h2>Get In Touch</h2>
        <ul className="actions">
          <li>
            <span className="icon fa-phone"></span> <a href="/#">(000) 000-0000</a>
          </li>
          <li>
            <span className="icon fa-envelope"></span>{" "}
            <a href="/#">information@untitled.tld</a>
          </li>
          <li>
            <span className="icon fa-map-marker"></span> 123 Somewhere Road,
            Nashville, TN 00000
          </li>
        </ul>
      </div>
      <div className="copyright">
        &copy; Untitled. Design <a href="https://templated.co">TEMPLATED</a>.
        Images <a href="https://unsplash.com">Unsplash</a>.
      </div>
    </footer>
  );
};

export default Footer;
