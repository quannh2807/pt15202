import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    let { url } = useRouteMatch();
    const itemCount = useSelector((state) => state.cart.itemCount);

    return (
        <div className="shadow-md sticky top-0 bg-white">
            <header className="container mx-auto flex items-center justify-between py-6">
                <p className="m-0 font-logo text-4xl text-red-500">intensify</p>

                <nav className="flex items-center">
                    <ul>
                        <Link
                            to={`${url}`}
                            className="px-5 font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-700"
                        >
                            Trang chủ
                        </Link>
                        <Link
                            to={`${url}/store`}
                            className="px-5 font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-700"
                        >
                            Cửa hàng
                        </Link>
                        <Link
                            to={`${url}/contact`}
                            className="px-5 font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-700"
                        >
                            Liên hệ
                        </Link>
                        <Link
                            to={`${url}/about`}
                            className="px-5 font-semibold uppercase tracking-wide text-gray-600 hover:text-gray-700"
                        >
                            Giới thiệu
                        </Link>
                    </ul>

                    <ul className="">
                        <li className="border-2 border-gray-300 rounded-lg hover:bg-gray-100">
                            <Link
                                to={`${url}/cart`}
                                className="p-4 flex font-semibold uppercase tracking-wide text-gray-600"
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
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                                <span className="uppercase text-sm px-1 font-bold text-red-600">
                                    {itemCount}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
