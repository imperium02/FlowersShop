import * as types from "../actions/actionTypes";

export default function partnerReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_PARTNER_UUID:
      return { ...state, uuid: action.uuid };
    default:
      return state;
  }
}
