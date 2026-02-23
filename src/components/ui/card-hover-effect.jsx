import { Link } from "react-router-dom";
import { useState } from "react";


const CardItem = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={item?.link}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: hovered
            ? '0 0 24px 4px rgba(56,189,248,0.45), 0 8px 32px rgba(56,189,248,0.15)'
            : '0 2px 8px rgba(0,0,0,0.4)',
          borderColor: hovered ? 'rgba(56,189,248,0.6)' : 'rgba(255,255,255,0.1)',
        }}
        className="rounded-2xl h-full w-full p-4 overflow-hidden bg-black border relative z-20 cursor-pointer"
      >
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