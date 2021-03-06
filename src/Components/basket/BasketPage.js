import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
      <table className={"table mr-2"}>
        <colgroup>
          <col span={"1"} style={{ width: 20 + "%" }} />
          <col span={"1"} style={{ width: 20 + "%" }} />
          <col span={"1"} style={{ width: 30 + "%" }} />
          <col span={"1"} style={{ width: 10 + "%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>Gatunek</th>
            <th>Kolor</th>
            <th>Ilość</th>
            <th>Cena</th>
          </tr>
        </thead>
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
                <th>{(el.price * el.qty).toFixed(2)} zł</th>
              </tr>
            );
          })}
          <tr>
            <th> </th>
            <th> </th>
            <th>Suma:</th>
            <th>
              {props.cart.items
                .reduce((prev, curr) => {
                  return prev + curr.price * curr.qty;
                }, 0)
                .toFixed(2)}{" "}
              zł
            </th>
          </tr>
        </tbody>
      </table>
      <Link to={"/payment"} className={"btn btn-outline-primary"}>
        Zapłać
      </Link>
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
