import { combineReducers } from "redux";
import flowers from "./flowerReducer";
import cart from "./cartReducer";

const rootReducer = combineReducers({
  flowers: flowers,
  cart: cart,
});

export default rootReducer;
