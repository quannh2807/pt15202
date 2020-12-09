import React, { useContext } from "react";
import { CartContext } from "contexts/Cart";
import CartItem from "./CartItem";

import { formatCash } from "constants/Others";

const CartPage = () => {
    const { cartItems, total } = useContext(CartContext);

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
                        <CartItem item={item} key={index} position={index} />
                    ))}

                {cartItems.length > 0 && (
                    <div className="flex justify-between items-center py-6">
                        <div className="text-black font-bold text-xl">
                            Tổng giá trị:&nbsp;
                        </div>

                        <div className="text-red-600 text-xl font-bold">
                            {formatCash(`${total}`)} VND
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
