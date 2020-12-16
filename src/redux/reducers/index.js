import cartReducer from "redux/reducers/cart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;
