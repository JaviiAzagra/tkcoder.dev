import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notfound">
      <h1>
        4{" "}
        <span>
          <img src="/assets/flotador.png" alt="Logo" />
        </span>
        4
      </h1>
      <p>No se encuentra esta página</p>
      <Link to="/">Inicio</Link>
    </div>
  );
};

export default NotFound;
