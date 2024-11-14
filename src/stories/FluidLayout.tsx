import React from "react";

import "./fluidLayout.css";

export const FluidLayout = () => {
  return (
    <div className="fluidLayout_body">
      <div className="fluidLayout_container">
        <input className="name" placeholder="usename"/>
        <input className="email" placeholder="password" />
        <button>submit</button>
      </div>
    </div>
  );
};
