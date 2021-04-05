import * as types from "./actionTypes";

export function createFlower(flower) {
  return { type: types.CREATE_FLOWER, flower: flower };
}

function loadFlowersSuccess(flowers) {
  return { type: types.LOAD_FLOWERS_SUCCESS, flowers };
}

export function loadFlowers() {
  return function (dispatch) {
    return fetch("/api/flowers")
      .then((response) => response.json())
      .then((json) => dispatch(loadFlowersSuccess(json)));
  };
}
