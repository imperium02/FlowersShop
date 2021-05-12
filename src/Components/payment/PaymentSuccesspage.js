import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function PaymentSuccess(props) {
  let partner;
  if (props.uuid) {
    const sum =
      props.cart.items.reduce((prev, curr) => {
        return prev + curr.price * curr.qty;
      }, 0) * 0.1;

    partner = (
      <>
        <h4>Partner zarobił: {sum.toFixed(2)} zł</h4>
        <h4>Jego UUID: {props.uuid}</h4>
      </>
    );
  } else {
    partner = null;
  }

  return (
    <div className={"jumbotron"}>
      <h1>Płatność zakończona sukcesem!</h1>
      {partner}
    </div>
  );
}

PaymentSuccess.prototype = {
  cart: PropTypes.object,
  uuid: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
    uuid: state.uuid.uuid,
  };
}

export default connect(mapStateToProps)(PaymentSuccess);
