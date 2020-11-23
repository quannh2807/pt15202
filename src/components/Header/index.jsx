import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="shadow-md sticky top-0 bg-white">
            <header className="container mx-auto flex items-center justify-between py-6">
                <p className="m-0 font-logo text-4xl text-red-500">intensify</p>

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

                <nav className="py-4 px-6 border border-gray-300 rounded-lg hover:bg-gray-100">
                    <a href="/#" className="font-semibold uppercase tracking-wide text-gray-600">
                        Log in
                    </a>
                </nav>
            </header>
        </div>
    );
};

export default Header;
