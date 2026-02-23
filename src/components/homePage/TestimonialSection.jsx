import React, { useState } from 'react'
import { testimonials } from '../../data/testimonials'

const TestimonialCard = ({ testimonial }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered
          ? '0 0 24px 4px rgba(56,189,248,0.4), 0 8px 32px rgba(56,189,248,0.15)'
          : '0 2px 12px rgba(0,0,0,0.4)',
        borderColor: hovered ? 'rgba(56,189,248,0.55)' : 'rgba(75,85,99,0.6)',
      }}
      className="aspect-auto p-8 border rounded-3xl bg-gray-800 cursor-pointer"
    >
      <div className="flex gap-4">
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
      <p className="mt-8 text-gray-300">{testimonial?.testimonial}</p>
    </div>
  );
};

export const TestimonialSection = () => {
  return (
    <>
      <div className="text-gray-300 mt-10" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-20 space-y-4 px-6 md:px-0">
            <h2 className='text-white text-center text-4xl font-bold -mt-10'>
              Words from Our <span className='text-caribbeangreen-500'>Members</span>
            </h2>
          </div>
          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8 mb-12 -mt-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

