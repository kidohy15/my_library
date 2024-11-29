import React from "react";

import "./VerificationCode.css";

export const VerificationCode = () => {
  return (
    <div className="VerificationCode_body">
      <div className="verification-code">
        <h2>Enter The Code</h2>
        <div className="verification-code-container">
          <input type="text" maxLength={1} className="input"/>
          <input type="text" maxLength={1} className="input"/>
          <input type="text" maxLength={1} className="input"/>
          <input type="text" maxLength={1} className="input"/>
          <input type="text" maxLength={1} className="input"/>
          <input type="text" maxLength={1} className="input"/>
        </div>
        <div className="button-container">
          <button>Verify</button>
        </div>
      </div>
    </div>
  );
};
