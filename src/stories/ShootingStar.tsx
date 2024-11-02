// ShootingStar.js

import React, { useEffect } from "react";
import "./shootingStar.css";

export const ShootingStar = () => {
  useEffect(() => {
    const createShootingStar = () => {
      const night = document.querySelector(".night");
      if (!night) return;

      for (let i = 0; i < 3; i++) { // 유성우 개수 줄이기
        const star = document.createElement("div");
        star.classList.add("shooting_star");

        // 랜덤 위치 및 속도 설정
        star.style.top = `${Math.random() * 80}%`; // 화면 상단 쪽에서 시작
        star.style.left = `${Math.random() * 80}%`;
        star.style.animationDuration = `${3.5 + Math.random()}s`; // 1.5초 ~ 2.5초 사이의 속도
        star.style.animationDelay = `${Math.random() * 1.5}s`; // 0 ~ 3초 사이의 랜덤 지연 시간

        night.appendChild(star);

        // 애니메이션이 끝난 후 요소 제거
        star.addEventListener("animationend", () => {
          star.remove();
        });
      }
    };

    // 매 2초마다 5개의 유성우 생성
    const interval = setInterval(createShootingStar, 3000);
    return () => clearInterval(interval);
  }, []);

  return <div className="night"></div>;
};
