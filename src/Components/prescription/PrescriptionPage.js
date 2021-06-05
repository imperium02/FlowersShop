import { useState, useEffect } from "react";
import React from "react";
import { useToasts } from "react-toast-notifications";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as flowerActions from "../../redux/actions/flowerActions";
import * as cartActions from "../../redux/actions/cartActions";
import * as prescriptionActions from "../../redux/actions/prescriptionActions";

function PrescriptionPage(props) {
  const { addToast } = useToasts();
  const [prescription, setPrescription] = useState("");
  const [pesel, setPESEL] = useState("");

  useEffect(() => {
    if (props.prescriptions.length === 0) {
      props.prescriptionActions.loadPrescription();
    }
  }, [props.prescription]);

  const handleChange = (event) => {
    setPrescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(pesel.length);
    if (
      props.prescriptions.find((presc) => presc.number === prescription) &&
      pesel.length === 11
    ) {
      const prs = props.prescriptions.find((el) => el.number === prescription);
      props.cartActions.addItemToCart(prs);
      if (props.cart.items.find((el) => el.id === prs.id)) {
        addToast("Recepta została już użyta", {
          appearance: "warning",
        });
        return;
      }
      addToast("Dodano receptę do koszyka", {
        appearance: "success",
      });
    } else {
      addToast(`Zła recepta lub niepoprawny PESEL`, {
        appearance: "warning",
      });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">430654</div>
      <div className="row justify-content-md-center">537257</div>
      <div className="row justify-content-md-center">
        <div className="col-6 m-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nrRec">Numer recepty:</label>
              <input
                type="text"
                id="nrRec"
                name="nrRec"
                className="form-control"
                onChange={handleChange}
              ></input>
              <label htmlFor="nrPESEL">Wpisz PESEL:</label>
              <input
                type="text"
                id="nrPESEL"
                name="nrPESEL"
                className="form-control"
                onChange={(event) => setPESEL(event.target.value)}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Dodaj recepte
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

PrescriptionPage.propTypes = {
  prescriptionActions: PropTypes.object.isRequired,
  prescriptions: PropTypes.array.isRequired,
  cartActions: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    prescriptions: state.prescriptions,
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    prescriptionActions: bindActionCreators(prescriptionActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionPage);
