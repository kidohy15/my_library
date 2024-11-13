import React from "react";

import "./textOnImage.css";

export const TextOnImage = () => {
  return (
    <div className="TextOnImage_body">
      <div className="container">
        <img src="src/assets/pic1.jpg" />
        <div className="box">
          <h1>Image</h1>
        </div>
      </div>
    </div>
  );
};
