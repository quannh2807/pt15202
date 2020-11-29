import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const newCartItems = cartItems.concat(product);
        setCartItems(newCartItems);
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
