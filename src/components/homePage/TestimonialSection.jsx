import React from 'react'
import { testimonials } from '../../data/testimonials'
import { CardSpotlight } from '../ui/card-spotlight'
import { transformCloudinaryUrl } from '../../utils/cloudinaryTransform';

export const TestimonialSection = () => {
  return (
    <div className="text-gray-300 mt-8 px-4 md:px-8 pb-8 font-jakarta" id="reviews">
      {/* Enhanced Glass container for the whole section */}
      <div className="relative rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl p-8 md:p-12 shadow-2xl">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-14 text-center">
            <h2 className='text-white text-3xl md:text-5xl font-bold font-outfit tracking-tight'>
              Words from Our <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-caribbeangreen-400'>Members</span>
            </h2>
            <p className="mt-4 text-blue-100/60 max-w-2xl mx-auto font-light">
              Discover what our community has to say about their journey and experiences with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <CardSpotlight key={index} className="flex flex-col h-full">
                <div className="flex gap-4 items-center mb-6">
                  <img className="w-12 h-12 rounded-full border-2 border-white/10 object-cover" src={transformCloudinaryUrl(testimonial?.avatar)} alt={testimonial?.name} loading="lazy" />
                  <div>
                    <h6 className="text-white font-semibold text-lg">{testimonial?.name}</h6>
                    <p className="text-sm text-blue-200/60 font-light">{testimonial?.position}</p>
                  </div>
                </div>
                <p className="text-white/70 font-light leading-relaxed flex-grow">
                  "{testimonial?.testimonial}"
                </p>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
