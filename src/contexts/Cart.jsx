import React, { useState } from "react";
import Swal from "sweetalert2";
import { nyanCat } from "constants/Images";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const newCartItems = cartItems.concat(product);
        Swal.fire({
            title: "Thêm vào giỏ hàng thành công",
            width: 400,
            padding: "2em",
            backdrop: `
                rgba(0,0,123,0.4)
                url(${nyanCat})
                left top
                no-repeat
            `,
        }).then(() => setCartItems(newCartItems));
    };

    const removeItem = (position) => {
        const removedCartItems = [
            ...cartItems.slice(0, position),
            ...cartItems.slice(position + 1),
        ];
        setCartItems(removedCartItems);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
            {props.children}
        </CartContext.Provider>
    );
};
