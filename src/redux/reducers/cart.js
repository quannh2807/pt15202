const storage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const Storage = (cartItems) => {
    localStorage.setItem(
        "cart",
        JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
};

export const sumItems = (cartItems) => {
    Storage(cartItems);
    let itemCount = cartItems.reduce(
        (total, product) => total + product.quantity,
        0
    );
    let total = cartItems
        .reduce((total, product) => total + product.price * product.quantity, 0);
    return { itemCount, total };
};

const initialState = {
    cartItems: storage,
    ...sumItems(storage),
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART_ITEM": {
            // const newCartItems = [...state.cartItems];
            // mutate cartItems
            state.cartItems.push({ ...action.payload, quantity: 1 });
            console.log("Add to cart success!");

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems],
            };
        }

        case "REMOVE_CART_ITEM": {
            return {
                ...state,
                ...sumItems(
                    state.cartItems.filter(
                        (item) => item.id !== action.payload.id
                    )
                ),
                cartItems: [
                    ...state.cartItems.filter(
                        (item) => item.id !== action.payload.id
                    ),
                ],
            };
        }

        case "INCREASE_CART_ITEM": {
            state.cartItems[
                state.cartItems.findIndex(
                    (item) => item.id === action.payload.id
                )
            ].quantity++;

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems],
            };
        }

        case "DECREASE_CART_ITEM": {
            state.cartItems[
                state.cartItems.findIndex(
                    (item) => item.id === action.payload.id
                )
            ].quantity--;

            return {
                ...state,
                ...sumItems(state.cartItems),
                cartItems: [...state.cartItems],
            };
        }

        default:
            return state;
    }
};

export default cartReducer;
