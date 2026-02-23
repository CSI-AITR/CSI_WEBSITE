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

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const left = `${(offsetX / rect.width) * 100}%`;
      // use Web Animations API to animate left property
      if (span.animate) {
        span.animate([{ left }], { duration: 250, fill: "forwards" });
      } else {
        span.style.left = left;
      }
    };

    const handleMouseLeave = () => {
      if (span.animate) {
        span.animate([{ left: "50%" }], { duration: 100, fill: "forwards" });
      } else {
        span.style.left = "50%";
      }
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      onClick={() => navigate("/team")}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Meet Our Team
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
        style={{ left: "50%" }}
      />
    </motion.button>
  );
};

export default SpotlightButton;
