import React, { useState } from 'react'
import { testimonials } from '../../data/testimonials'

const glareKeyframes = `
@keyframes glare-sweep-t {
  0%   { transform: translateX(-120%) skewX(-20deg); opacity: 0; }
  10%  { opacity: 1; }
  100% { transform: translateX(220%) skewX(-20deg); opacity: 0; }
}
`;

const TestimonialCard = ({ testimonial }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <style>{glareKeyframes}</style>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
          transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: hovered
            ? '0 0 28px 6px rgba(56,189,248,0.32), 0 8px 32px rgba(56,189,248,0.12), inset 0 1px 0 rgba(255,255,255,0.18)'
            : '0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)',
          borderColor: hovered ? 'rgba(125,211,252,0.45)' : 'rgba(255,255,255,0.12)',
          background: 'rgba(10, 10, 10, 0.55)',
          backdropFilter: 'blur(14px) saturate(160%)',
          WebkitBackdropFilter: 'blur(14px) saturate(160%)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="aspect-auto p-8 border rounded-3xl cursor-pointer"
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
              animation: hovered ? 'glare-sweep-t 0.65s ease forwards' : 'none',
            }}
          />
        </div>

        <div className="relative z-20 flex gap-4">
          <img className="w-14 h-14 rounded-full" src={testimonial?.avatar} alt="user avatar" width="400" height="400" loading="lazy" />
          <div>
            <h6
              style={{ color: hovered ? '#7dd3fc' : '#ffffff', transition: 'color 0.3s ease' }}
              className="text-lg font-medium"
            >
              {testimonial?.name}
            </h6>
            <p className="text-sm text-gray-400">{testimonial?.position}</p>
          </div>
        </div>
        <p className="mt-8 text-gray-300 relative z-20">{testimonial?.testimonial}</p>
      </div>
    </>
  );
};

export const TestimonialSection = () => {
  return (
    <>
      <div className="text-gray-300 mt-8 px-4 md:px-8 pb-8" id="reviews">
        {/* Glass container for the whole section */}
        <div style={{
          background: 'rgba(10, 10, 10, 0.55)',
          backdropFilter: 'blur(16px) saturate(160%)',
          WebkitBackdropFilter: 'blur(16px) saturate(160%)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '1.5rem',
          padding: '2.5rem 1.5rem',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(0,0,0,0.5)',
        }}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="mb-12 space-y-4 px-6 md:px-0">
              <h2 className='text-white text-center text-4xl font-bold'>
                Words from Our <span className='text-caribbeangreen-500'>Members</span>
              </h2>
            </div>
            <div className="md:columns-2 lg:columns-3 gap-8 space-y-8 mb-4">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


