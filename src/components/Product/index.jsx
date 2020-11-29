import React from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/Cart";

const Product = ({ product }) => (
    <div className="shadow-xl rounded-xl border border-gray-300">
        <div className="">
            <img
                src={product.img_url}
                alt=""
                className="rounded-t-xl rounded-r-rounded-t-xl w-full"
            />
        </div>

        <div className="flex justify-around items-center">
            <h3 className="p-4">
                <a
                    href="/"
                    className="text-sm text-gray-500 font-bold uppercase hover:underline mr-2"
                >
                    {product.category.title}
                </a>
                &nbsp;-&nbsp;
                <Link
                    to={`/news/${product.id}`}
                    replace
                    className="text-secondary font-bold text-xl text-center py-4 hover:underline"
                >
                    {product.name}
                </Link>
            </h3>

            <CartContext.Consumer>
                {({ addToCart }) => {
                    return (
                        <div
                            className="p-2 border border-gray-300 rounded-xl"
                            onClick={() => addToCart(product)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#25a2c3"
                                height="20"
                                width="20"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                        </div>
                    );
                }}
            </CartContext.Consumer>
        </div>
    </div>
);

export default Product;
