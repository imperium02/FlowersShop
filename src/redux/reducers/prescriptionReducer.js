import * as types from "../actions/actionTypes";

export default function flowerReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_PRESCRIPTION_SUCCESS:
      return action.prescriptions;
    default:
      return state;
  }
}
