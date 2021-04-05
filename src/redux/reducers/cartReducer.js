import * as types from "../actions/actionTypes";

export default function cartReducer(state = { items: [] }, action) {
  switch (action.type) {
    case types.UPDATE_CART_QTY:
      return {
        ...state,
        items: state.items.map((el) => {
          if (el.id === action.item.id) {
            return {
              ...el,
              qty: action.item.qty + 1 ?? 1,
            };
          }
          return el;
        }),
      };
    case types.DECREMENT_CART_QTY:
      return {
        ...state,
        items: state.items.map((el) => {
          if (el.id === action.item.id) {
            return {
              ...el,
              qty: action.item.qty > 0 ? action.item.qty - 1 : 0,
            };
          }
          return el;
        }),
      };
    case types.UPDATE_CART:
      if (state.items.find((el) => el.id === action.item.id)) {
        return state;
      }

      return { ...state, items: [...state.items, { ...action.item, qty: 1 }] };
    default:
      return state;
  }
}
