import React from "react";

import "./cardHover.css";

export const CardHover = () => {
  return (
    <div id="cardHoverWrap">
      <div className="cardContainer">
        <div className="card">
          <h3 className="title">Card 1</h3>
        </div>
        <div className="card">
          <h3 className="title">Card 2</h3>
        </div>
        <div className="card">
          <h3 className="title">Card 3</h3>
        </div>
        <div className="card">
          <h3 className="title">Card 4</h3>
        </div>
      </div>
    </div>
  );
};
