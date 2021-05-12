import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as flowerActions from "../../redux/actions/flowerActions";
import * as cartActions from "../../redux/actions/cartActions";
import * as partnerActions from "../../redux/actions/partnerActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { useToasts } from "react-toast-notifications";
import queryString from "query-string";

function FlowersPage(props) {
  const { addToast } = useToasts();

  useEffect(() => {
    if (props.flowers.length === 0) {
      props.flowersActions.loadFlowers();
    }
  }, [props.flowers]);

  useEffect(() => {
    const partnerToken = queryString.parse(location.search);
    if (partnerToken.partner) {
      addToast("Accesed site with partner code", {
        appearance: "info",
      });
      if (partnerToken.partner !== props.uuid.uuid) {
        props.partnerActions.addPartner(partnerToken.partner);
      }
    }
  }, []);

  function handleAddToCart(flower) {
    props.cartActions.addItemToCart(flower);
    if (props.cart.items.find((el) => el.id === flower.id))
      addToast(`${flower.color} ${flower.name} jest już dodany do koszyka`, {
        appearance: "warning",
      });
    else
      addToast(`${flower.color} ${flower.name} został dodany do koszyka`, {
        appearance: "success",
      });
  }

  return (
    <div className={"row"}>
      {props.flowers.map((flower) => (
        <div style={{ width: 30 + "em" }} key={flower.id}>
          <div className={"card m-4"}>
            <img
              src={require(`../static/roses/${flower.color}.jpg`)}
              className={"card-img-top"}
              alt={`${flower.color} ${flower.name}`}
            />
            <div className={"card-body"}>
              <h5 className={"card-title"}>
                {flower.color} {flower.name}
              </h5>
              <h5>{flower.price} zł/szt.</h5>
              <a
                className={"btn btn-primary mt-2"}
                onClick={() => handleAddToCart(flower)}
              >
                Dodaj do koszyka
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

FlowersPage.propTypes = {
  flowersActions: PropTypes.object.isRequired,
  flowers: PropTypes.array.isRequired,
  cartActions: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  partnerActions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    flowers: state.flowers,
    cart: state.cart,
    uuid: state.uuid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    flowersActions: bindActionCreators(flowerActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
    partnerActions: bindActionCreators(partnerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlowersPage);
