import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <nav className="">
                <Link
                    to="/"
                    className="px-5 font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-700"
                >
                    Home
                </Link>
                <Link
                    to="/news"
                    className="px-5 font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-700"
                >
                    News
                </Link>
                <Link
                    to="/contact"
                    className="px-5 font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-700"
                >
                    Contact
                </Link>
                <Link
                    to="/about"
                    className="px-5 font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-700"
                >
                    About
                </Link>
            </nav>

            <p className="logo">intensify</p>

            <nav className="right">
                <a href="/#" className="button alt">
                    Log in
                </a>
            </nav>
        </header>
    );
};

export default Header;
