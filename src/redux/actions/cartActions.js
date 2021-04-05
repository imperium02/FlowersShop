import * as types from "./actionTypes";

export function updateCartQTY(item) {
  return { type: types.UPDATE_CART_QTY, item };
}

export function addItemToCart(item) {
  return { type: types.UPDATE_CART, item };
}

export function decrementCartQTY(item) {
  return { type: types.DECREMENT_CART_QTY, item };
}
