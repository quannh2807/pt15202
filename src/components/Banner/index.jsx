import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="banner">
      <div className="content">
        <h1>Ipsum sed lorem</h1>
        <p>
          Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod
          <br />
          sed arcu cras consecuat lorem ipsum dolor sit amet.
        </p>
        <ul className="actions">
          <li>
            <Link to="/news" className="button scrolly">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
