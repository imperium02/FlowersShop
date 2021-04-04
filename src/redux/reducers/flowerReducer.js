import * as types from "../actions/actionTypes";

export default function flowerReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_FLOWER:
      return [...state, { ...action.flower }];
    default:
      return state;
  }
}
