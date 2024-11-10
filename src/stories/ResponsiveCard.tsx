import React from "react";

import "./responsiveCard.css";

export const ResponsiveCard = () => {
  return (
    <div id="responsiveCardWrap">
      <div className="container">
        {/* #1 */}
        <div className="mycard">
          <div className="cimg">
            <img src="src/assets/pic1.jpg" alt="Image" />
          </div>
          <div className="cdetail">
            <h2>Card no1</h2>
            <p>
              this is the one of the beautiful image of beautiful nature there
              we have the oportunity live with such a nice creative
            </p>
          </div>
        </div>

        {/* #2 */}
        <div className="mycard">
          <div className="cimg">
            <img src="src/assets/pic2.webp" alt="Image" />
          </div>
          <div className="cdetail">
            <h2>Card no1</h2>
            <p>
              this is the one of the beautiful image of beautiful nature there
              we have the oportunity live with such a nice creative
            </p>
          </div>
        </div>

        {/* #3 */}
        <div className="mycard">
          <div className="cimg">
            <img src="src/assets/pic3.webp" alt="Image" />
          </div>
          <div className="cdetail">
            <h2>Card no1</h2>
            <p>
              this is the one of the beautiful image of beautiful nature there
              we have the oportunity live with such a nice creative
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
