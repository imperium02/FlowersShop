import { combineReducers } from "redux";
import flowers from "./flowerReducer";

const rootReducer = combineReducers({
  flowers: flowers,
});

export default rootReducer;
