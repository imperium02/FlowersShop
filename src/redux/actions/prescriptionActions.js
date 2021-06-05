import * as types from "./actionTypes";

function loadPrescriptionSuccess(prescriptions) {
  return { type: types.LOAD_PRESCRIPTION_SUCCESS, prescriptions };
}

export function loadPrescription() {
  return function (dispatch) {
    return fetch("/api/prescription")
      .then((response) => response.json())
      .then((json) => dispatch(loadPrescriptionSuccess(json)));
  };
}
