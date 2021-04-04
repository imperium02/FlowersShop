import * as types from "./actionTypes";

export function createFlower(flower) {
  return { type: types.CREATE_FLOWER, flower: flower };
}

export function loadFlower() {
  return function (dispatch) {
    return;
  };
}
