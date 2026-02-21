import React from 'react'
import { testimonials } from '../../data/testimonials'

export const TestimonialSection = () => {
  return (
    <>
    <div className="text-pure-greys-100  text-gray-300 mt-10" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="mb-20 space-y-4 px-6 md:px-0 ">
                <h2 className='text-white text-center text-4xl font-bold -mt-10'>
                    Words from Our <span className='text-caribbeangreen-500'>Members</span>
                </h2>
            </div>
            <div className="md:columns-2 lg:columns-3 gap-8 space-y-8 mb-12 -mt-10">
                {
                    testimonials.map((testimonial,index)=>(
                        <div key={index} className="aspect-auto p-8 border border-richblack-600 rounded-3xl bg-home-100 bg-gray-800 border-gray-700 shadow-2xl shadow-gray-600/10 hover:cursor-pointer">
                             <div className="flex gap-4">
                                <img className="w-14 h-14 rounded-full" src={testimonial?.avatar} alt="user avatar" width="400" height="400" loading="lazy"/>
                                <div>
                                    <h6 className="text-lg font-medium text-gray-700 text-white">{testimonial?.name}</h6>
                                    <p className="text-sm text-gray-500 text-gray-300">{testimonial?.position}</p>
                                </div>
                             </div>
                             <p className="mt-8">{testimonial?.testimonial}</p>
                        </div>
                    ))
                }
            </div>
        </div>  
    </div>
    </>
  )
}
