import { Link } from "react-router-dom";
import { useState } from "react";

const glareKeyframes = `
@keyframes glare-sweep {
  0%   { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
  10%  { opacity: 1; }
  100% { transform: translateX(220%) skewX(-20deg); opacity: 0; }
}
`;


const CardItem = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <style>{glareKeyframes}</style>
      <Link to={item?.link}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
            transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
            boxShadow: hovered
              ? '0 0 28px 6px rgba(56,189,248,0.35), 0 8px 32px rgba(56,189,248,0.12), inset 0 1px 0 rgba(255,255,255,0.18)'
              : '0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
            borderColor: hovered ? 'rgba(125,211,252,0.45)' : 'rgba(255,255,255,0.12)',
            background: 'rgba(10, 10, 10, 0.55)',
            backdropFilter: 'blur(14px) saturate(160%)',
            WebkitBackdropFilter: 'blur(14px) saturate(160%)',
          }}
          className="rounded-2xl h-full w-full p-4 overflow-hidden border relative z-20 cursor-pointer"
        >
          {/* Glare shine line */}
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              pointerEvents: 'none',
              overflow: 'hidden',
              borderRadius: 'inherit',
              zIndex: 10,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-50%',
                left: 0,
                width: '40%',
                height: '200%',
                background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.18) 50%, transparent 80%)',
                animation: hovered ? 'glare-sweep 0.65s ease forwards' : 'none',
              }}
            />
          </div>

          <div className="relative z-50">
            <div className="p-4">
              <h4
                style={{ color: hovered ? '#7dd3fc' : '#ffffff', transition: 'color 0.3s ease' }}
                className="font-bold tracking-wide mt-4 text-base"
              >
                {item?.title}
              </h4>
              <p className="mt-8 text-gray-400 tracking-wide leading-relaxed text-sm">
                {item?.description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export const HoverEffect = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
      {items.map((item, index) => (
        <CardItem key={index} item={item} />
      ))}
    </div>
  );
};