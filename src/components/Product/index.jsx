import React from "react";
import { Link } from "react-router-dom";

import { CartContext } from "contexts/Cart";

const Product = ({ product }) => (
    <div className="flex flex-col justify-between shadow-xl rounded-xl border border-gray-300 pb-4">
        <div className="">
            <img
                src={product.img_url}
                alt=""
                className="rounded-t-xl rounded-r-rounded-t-xl w-full h-64"
            />
        </div>

        <div className=" flex justify-around items-center">
            <h3 className="p-4">
                <a
                    href="/"
                    className="text-sm text-gray-500 font-bold uppercase hover:underline mr-2"
                >
                    {product.category.title}
                </a>
                &nbsp;-&nbsp;
                <Link
                    to={`/store/${product.id}`}
                    replace
                    className="text-secondary font-bold text-xl text-center py-4 hover:underline"
                >
                    {product.name}
                </Link>
            </h3>
            <p className="font-bold text-red-600">{product.price} VND</p>
        </div>
        <CartContext.Consumer>
            {({ addToCart }) => (
                <div className=" flex justify-center items-center">
                    <div
                        className="px-4 py-2 border-2 border-red-600 hover:bg-primary hover:text-white w-full mx-6 rounded-xl text-center font-bold text-primary"
                        onClick={() => addToCart(product)}
                    >
                        Thêm vào giỏ hàng
                    </div>
                </div>
            )}
        </CartContext.Consumer>
    </div>
);

export default Product;
