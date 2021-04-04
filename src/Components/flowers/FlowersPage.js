import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as flowerActions from "../../redux/actions/flowerActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function FlowersPage(props) {
  const [flower, SetFlower] = useState({ title: "" });
  const [flowers, SetFlowers] = useState([]);

  useEffect(() => {
    if (flowers.length === 0) {
      fetch("/api/flowers/")
        .then((response) => response.json())
        .then((json) => SetFlowers(json));
    }
  });

  function handleChange(event) {
    const flower = { ...flower, title: event.target.value };
    SetFlower(flower);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.actions.createFlower(flower);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Flowers</h2>
        <h3>Add Flower</h3>
        <input type="text" onChange={handleChange} value={flower.title} />
        <input type={"submit"} value={"Save"} />
      </form>
      {flowers.map((flower) => (
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
