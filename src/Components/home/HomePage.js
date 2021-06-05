import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Apteka</h1>
      <p>Testowa</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Kontakt
      </Link>
    </div>
  );
}

export default HomePage;
