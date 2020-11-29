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
                        to="/category"
                        className="px-5 font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-700"
                    >
                        Category
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

                <nav className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-100">
                    <Link
                        to="/login"
                        className="font-semibold uppercase tracking-wide text-gray-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="20"
                            height="20"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                    </Link>
                </nav>
            </header>
        </div>
    );
};

export default Header;
