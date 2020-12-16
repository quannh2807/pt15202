import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

import { formatCash } from "constants/Others";

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const total = useSelector((state) => state.cart.total);

    return (
        <div className="bg-gray-300 py-6">
            <div className="w-3/4 mx-auto bg-white rounded-2xl px-6">
                {cartItems.length <= 0 && (
                    <h3 className="text-2xl py-10">
                        Chưa có sản phẩm trong giỏ hàng
                    </h3>
                )}

                {cartItems.length > 0 &&
                    cartItems.map((item, index) => (
                        <CartItem item={item} key={index} />
                    ))}

                {cartItems.length > 0 && (
                    <div className="flex justify-between items-center py-6">
                        <div className="text-black font-bold text-xl">
                            Tổng giá trị:&nbsp;
                            <span className="text-red-600 text-xl font-bold">
                                {formatCash(`${total}`)} VND
                            </span>
                        </div>

                        <button className="btn-orange font-semibold">
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
