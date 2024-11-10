import React, { useEffect, useRef } from "react";
import "./twoDToThreeD.css";

export const TwoDToThreeD = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let twoDToThreeDContainer = containerRef.current;
    if (twoDToThreeDContainer) {
      for (let i = 50; i >= -50; i--) {
        let span = document.createElement('span');
        span.style.setProperty('--i', `${i}`);
        twoDToThreeDContainer.appendChild(span);
      }
    }
  }, []);

  return (
    <div id="twoDToThreeDWrap">
      <div id="twoDToThreeDContainer" ref={containerRef}></div>
    </div>
  );
};
