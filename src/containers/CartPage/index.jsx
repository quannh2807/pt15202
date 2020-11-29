import React from "react";
import CartItem from "./CartItem";

import { CartContext } from "../../contexts/Cart";

const CartPage = () => {
    return (
        <div className="bg-gray-300 py-6">
            <div className="w-3/4 mx-auto bg-white rounded-2xl px-6">
                <CartContext.Consumer>
                    {({ cartItems }) => {
                        if (cartItems.length <= 0) {
                            return (
                                <h3 className="text-2xl">
                                    Không chưa có sản phẩm trong giỏ hàng
                                </h3>
                            );
                        }

                        return cartItems.map((product, index) => (
                            <CartItem
                                product={product}
                                key={index}
                                position={index}
                            />
                        ));
                    }}
                </CartContext.Consumer>

                <div className="flex justify-between items-center py-6">
                    <div className="text-black font-bold text-xl">Total</div>

                    <div className="text-secondary text-xl">$777</div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
