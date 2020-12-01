import React, { useContext } from "react";
import { CartContext } from "../../contexts/Cart";
import CartItem from "./CartItem";

const CartPage = () => {
    const { cartItems } = useContext(CartContext);
    const totalPrice = cartItems.reduce(
        (totalPrice, currentPrice) => totalPrice + currentPrice.price,
        0
    );

    return (
        <div className="bg-gray-300 py-6">
            <div className="w-3/4 mx-auto bg-white rounded-2xl px-6">
                {cartItems.length <= 0 && (
                    <h3 className="text-2xl py-10">
                        Chưa có sản phẩm trong giỏ hàng
                    </h3>
                )}

                {cartItems.length > 0 &&
                    cartItems.map((product, index) => (
                        <>
                            <CartItem
                                product={product}
                                key={index}
                                position={index}
                            />
                        </>
                    ))}

                {cartItems.length > 0 && (
                    <div className="flex justify-between items-center py-6">
                        <div className="text-black font-bold text-xl">
                            Tổng giá trị:{" "}
                        </div>

                        <div className="text-red-600 text-xl font-bold">
                            {totalPrice} VND
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
