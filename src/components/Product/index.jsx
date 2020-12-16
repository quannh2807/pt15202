import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewCartItem, increaseCartItem } from "redux/actions/cart";
import { formatCash } from "constants/Others";

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const handleClickAddToCart = (product) => {
        const action = addNewCartItem(product);
        dispatch(action);
    };
    const handleClickIncreaseCartItem = (product) => {
        const action = increaseCartItem(product);
        dispatch(action);
    };

    const cartItems = useSelector((state) => state.cart.cartItems);
    function isInCart(product) {
        return !!cartItems.find((item) => item.id === product.id);
    }

    const { path } = useRouteMatch();

    return (
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
                        to={`${path}/${product.id}`}
                        replace
                        className="text-secondary font-bold text-xl text-center py-4 hover:underline"
                    >
                        {product.name}
                    </Link>
                </h3>
                <p className="font-bold text-red-600">
                    {formatCash(`${product.price}`)} VND
                </p>
            </div>
            <div className=" flex justify-center items-center">
                {!isInCart(product) && (
                    <button
                        className="px-4 py-2 border-2 border-red-600 hover:bg-primary hover:text-white w-full mx-6 rounded-xl text-center font-bold text-primary focus:outline-none"
                        onClick={() => handleClickAddToCart(product)}
                    >
                        Thêm vào giỏ
                    </button>
                )}

                {isInCart(product) && (
                    <button
                        className="px-4 py-2 border-2 border-blue-400 hover:text-primary w-full mx-6 rounded-xl text-center font-bold text-secondary focus:outline-none"
                        onClick={() => handleClickIncreaseCartItem(product)}
                    >
                        Tăng số lượng
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;
