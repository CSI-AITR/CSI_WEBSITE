import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const btn = btnRef.current;
    const span = spanRef.current;
    if (!btn || !span) return;

    const moveTo = (clientX) => {
      const rect = btn.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const left = `${(offsetX / rect.width) * 100}%`;
      if (span.animate) {
        span.animate([{ left }], { duration: 250, fill: "forwards" });
      } else {
        span.style.left = left;
      }
    };

    const resetTo = () => {
      if (span.animate) {
        span.animate([{ left: "50%" }], { duration: 100, fill: "forwards" });
      } else {
        span.style.left = "50%";
      }
    };

    const handleMouseMove = (e) => moveTo(e.clientX);
    const handleMouseLeave = () => resetTo();
    const handleTouchMove = (e) => {
      e.preventDefault();
      moveTo(e.touches[0].clientX);
    };
    const handleTouchEnd = () => resetTo();

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("touchmove", handleTouchMove, { passive: false });
    btn.addEventListener("touchend", handleTouchEnd);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("touchmove", handleTouchMove);
      btn.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      onClick={() => navigate("/team")}
      className="relative overflow-hidden rounded-full bg-slate-950 font-medium text-white"
      style={{
        width: 'min(100%, 220px)',
        padding: 'clamp(10px, 2.5vw, 20px) clamp(8px, 2vw, 12px)',
        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
      }}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Meet Our Team
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute rounded-full bg-slate-100"
        style={{
          left: '50%',
          top: '50%',
          width: '120%',
          height: '300%',
          transform: 'translateX(-50%) translateY(-50%)',
        }}
      />
    </motion.button>
  );
};

export default SpotlightButton;
