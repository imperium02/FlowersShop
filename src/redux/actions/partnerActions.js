import * as types from "./actionTypes";

export function addPartner(uuid) {
  return { type: types.ADD_PARTNER_UUID, uuid };
}
