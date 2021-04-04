import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as flowerActions from "../../redux/actions/flowerActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function FlowersPage(props) {
  useEffect(() => {
    if (props.flowers.length === 0) {
      props.actions.loadFlowers();
    }
  }, [props.flowers]);

  return (
    <>
      {props.flowers.map((flower) => (
        <div key={flower.id}>
          {flower.name} {flower.color}
        </div>
      ))}
    </>
  );
}

FlowersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  flowers: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    flowers: state.flowers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(flowerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlowersPage);
