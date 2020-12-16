// action creator
export const addNewCartItem = (cartItem) => {
    return {
        type: "ADD_CART_ITEM",
        payload: cartItem,
    };
};

export const removeCartItem = (cartItem) => {
    return {
        type: "REMOVE_CART_ITEM",
        payload: cartItem,
    };
};

export const increaseCartItem = (cartItem) => {
    return {
        type: "INCREASE_CART_ITEM",
        payload: cartItem,
    };
};

export const decreateCartItem = (cartItem) => {
    return {
        type: "DECREASE_CART_ITEM",
        payload: cartItem,
    };
};
