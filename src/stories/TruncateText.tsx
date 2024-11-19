import React from "react";

import "./truncateText.css";

export const TruncateText = () => {
  return (
    <div className="TruncateText_body">
      {/* 화면 사이즈를 줄이면 ... 처리가 된다 */}
      <p className="text">This is a long sentence to read!</p>
    </div>
  );
};
