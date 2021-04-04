import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>bla</h1>
      <p>blab</p>
      <Link to="about" className="btn btn-primary btn-lg">
        BLALBA
      </Link>
    </div>
  );
}

export default HomePage;
