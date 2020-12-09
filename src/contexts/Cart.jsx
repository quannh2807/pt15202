import React, { useState } from "react";
import Swal from "sweetalert2";
import { nyanCat } from "constants/Images";

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        /**
         * 1. Kiem tra san pham da ton tai hay chua, thong qua id
         * 2. Thêm vào giỏ với quantity bằng 1 hoặc tăng quantity
         *
         * cartItem: { product: {...}, quantity: 1 }
         */

        if (cartItems.length === 0) {
            const newCartItems = cartItems.concat({ product, quantity: 1 });

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

            return;
        }
        if (cartItems.length > 0) {
            // check product existed
            for (const item of cartItems) {
                let currentQuantity = item.quantity;

                if (item.product.id === product.id) {
                    let replaceItem = {
                        product,
                        quantity: currentQuantity + 1,
                    };

                    // replace item in array
                    const index = cartItems.indexOf(item);
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
                    });
                    cartItems[index] = replaceItem;
                }

                if (item.product.id !== product.id) {
                    const newCartItems = cartItems.concat({
                        product,
                        quantity: 1,
                    });

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
                }
            }
        }
    };

    const removeItem = (position) => {
        const removedCartItems = [
            ...cartItems.slice(0, position),
            ...cartItems.slice(position + 1),
        ];
        setCartItems(removedCartItems);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeItem,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};
