import React, { useEffect } from "react";
import { preLoaderAnim } from "./animations/anim";
import './pre-loader.css';


const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>CODE.</span>
        <span>SCRIPT.</span>
        <span>INNOVATE.</span>
      </div>
    </div>
  );
};

export default PreLoader;