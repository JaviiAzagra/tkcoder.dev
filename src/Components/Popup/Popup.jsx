import React from "react";
import "./Popup.scss";

const Popup = ({ handleClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-inner">
          <h2>¡Bienvenido!</h2>
          <p>Esta página web está en proceso. Gracias por tu paciencia.</p>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
