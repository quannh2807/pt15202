import React, { createContext, useReducer } from "react";
import { CartReducer, sumItems } from "contexts/CartReducer";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const initialState = {
    cartItems: storage,
    ...sumItems(storage),
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = (product) => {
        dispatch({ type: "ADD_ITEM", product });
    };

    const removeProduct = (product) => {
        dispatch({ type: "REMOVE_ITEM", product });
    };

    const increase = (product) => {
        dispatch({ type: "INCREASE", product });
    };

    const decrease = (product) => {
        dispatch({ type: "DECREASE", product });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR" });
    };

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        ...state,
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
};
