import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Sklep z kwiatami</h1>
      <p>Testowy</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Kontakt
      </Link>
    </div>
  );
}

export default HomePage;
