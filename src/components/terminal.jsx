import React from "react";

const Terminal = ({ children }) => {
  return (
    <div className="terminal">
      <div className="terminal-contenedor-terminal">
        <div className="tres-puntos">
          <div className="puntos"></div>
          <div className="puntos"></div>
          <div className="puntos"></div>
        </div>

        <div className="terminal-contenedor">
          <div className="flecha"></div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
