import React from "react";

import "./dropdown.css";

export const Dropdown = () => {
  return (
    <div className="dropdown_body">
      <h1>Animated Drop Menu</h1>
      <nav>
        <ul className="main">
            {/* menu1 왼쪽에서 오른쪽으로 나타나는 형태 */}
          <li>
            <a href="#">Home</a>
            <ul className="drop menu1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">news</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
            </ul>
          </li>

          {/* menu2 살짝 커지고 원래 크리고 오는 형태 */}
          <li>
            <a href="#">news</a>
            <ul className="drop menu2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">news</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
