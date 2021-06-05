import { combineReducers } from "redux";
import flowers from "./flowerReducer";
import cart from "./cartReducer";
import uuid from "./partnerReducer";

const rootReducer = combineReducers({
  flowers: flowers,
  cart: cart,
  uuid: uuid,
});

export default rootReducer;
