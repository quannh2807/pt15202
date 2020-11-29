import React from "react";
import { CartContext } from "../../contexts/Cart";

const CartItem = ({ product, position }) => {
    console.log(position);
    return (
        <div className="flex justify-between py-6 items-center border-b border-gray-300">
            <div>
                <img
                    src={product.img_url}
                    alt=""
                    width="200"
                    className="rounded-2xl"
                />
            </div>

            <div>
                <h3 className="text-secondary font-bold text-xl">
                    {product.name}
                </h3>
                <p className="text-yellow-600">{product.description}</p>
            </div>

            <div>
                <p>Giá: {product.price} VND</p>
            </div>

            <CartContext.Consumer>
                {({ removeItem }) => (
                    <div onClick={() => removeItem(position)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#ff7d7d"
                            height="35"
                            width="35"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>
                )}
            </CartContext.Consumer>
        </div>
    );
};

export default CartItem;
