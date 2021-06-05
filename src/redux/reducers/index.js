import { combineReducers } from "redux";
import flowers from "./flowerReducer";
import cart from "./cartReducer";
import uuid from "./partnerReducer";
import prescriptions from "./prescriptionReducer";

const rootReducer = combineReducers({
  flowers: flowers,
  cart: cart,
  uuid: uuid,
  prescriptions: prescriptions,
});

export default rootReducer;
