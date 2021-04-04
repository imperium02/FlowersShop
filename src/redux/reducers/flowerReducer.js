import * as types from "../actions/actionTypes";

export default function flowerReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_FLOWER:
      return [...state, { ...action.flower }];
    case types.LOAD_FLOWERS_SUCCESS:
      return action.flowers;
    default:
      return state;
  }
}
