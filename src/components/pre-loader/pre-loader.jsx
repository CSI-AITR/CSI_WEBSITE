import React, { useEffect, useState } from "react";
import { preLoaderAnim } from "./animations/anim";
import './pre-loader.css';

const PreLoader = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    preLoaderAnim();

    let duration = 3500; // matches preloader duration before it slides up
    let startTime = null;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const currentCount = Math.min(100, Math.floor((progress / duration) * 100) + 1);
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(100);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>CODE.</span>
        <span>SCRIPT.</span>
        <span>INNOVATE.</span>
      </div>
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white font-bold text-4xl sm:text-5xl md:text-7xl font-outfit z-50">
        {count}%
      </div>
    </div>
  );
};

export default PreLoader;