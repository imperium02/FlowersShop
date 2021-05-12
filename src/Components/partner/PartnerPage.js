import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as partnerActions from "../../redux/actions/partnerActions";
import PropTypes from "prop-types";

function PartnerPage(props) {
  const [partnerURL, setPartnerURL] = useState("");

  const generateURL = () => {
    const uuid = uuidv4();
    props.partnerActions.addPartner(uuid);
    setPartnerURL(`http://localhost:3000/flowers?partner=${uuid}`);
  };

  return (
    <div className={"jumbotron"}>
      <Button variant={"primary"} onClick={generateURL}>
        Generuj URL partnera
      </Button>
      <Button variant={"link"} href={partnerURL}>
        {partnerURL}
      </Button>
    </div>
  );
}

PartnerPage.propTypes = {
  partnerActions: PropTypes.object.isRequired,
  uuid: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  return {
    uuid: state.uuid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    partnerActions: bindActionCreators(partnerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnerPage);
