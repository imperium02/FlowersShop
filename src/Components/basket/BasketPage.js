import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import PropTypes from "prop-types";

function BasketPage(props) {
  function incrementItem(item) {
    props.updateCartQTY(item);
  }

  function decrementItem(item) {
    props.decrementCartQTY(item);
  }

  return (
    <>
      <h2 className={"p-4"}>Twój koszyk</h2>
      <table className={"table m-2"}>
        <tbody>
          {props.cart.items.map((el) => {
            return (
              <tr key={el.id}>
                <th>{el.name}</th>
                <th>{el.color}</th>
                <th>
                  <a
                    onClick={() => incrementItem(el)}
                    className={"btn btn-outline-info m-1"}
                    style={{ width: 3 + "em" }}
                  >
                    +
                  </a>
                  <input
                    value={el.qty}
                    readOnly
                    className={"btn btn-outline-dark"}
                    style={{ width: 4 + "em" }}
                  />
                  <a
                    onClick={() => decrementItem(el)}
                    className={"btn btn-outline-danger m-1"}
                    style={{ width: 3 + "em" }}
                  >
                    -
                  </a>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

BasketPage.propTypes = {
  cart: PropTypes.object.isRequired,
  updateCartQTY: PropTypes.func.isRequired,
  decrementCartQTY: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCartQTY: (item) => dispatch(cartActions.updateCartQTY(item)),
    decrementCartQTY: (item) => dispatch(cartActions.decrementCartQTY(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketPage);
