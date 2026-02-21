import React from 'react'
import {Vortex} from "../ui/Vortex"
import { Link } from 'react-router-dom';
import {TypeAnimation} from "react-type-animation"


export const HeroSection = () => {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white  text-4xl md:text-6xl font-bold text-center">
            <span>Welcome to </span>
            <span className='text-[#1DA1F2]'>
                <TypeAnimation
                  sequence={[
                    'CSI',
                    250,
                    'CSI AITR',          
                   
                  ]}
                  speed={25}
                  // style={{ fontSize: '2em' }}
                  repeat={0}
                />
            </span>
        </h2>
        <p className="text-richblack-50 text-[16px] md:text-xl max-w-xl mt-6  text-justify">
                The Computer Society of India (CSI) is one of the largest and
                most professionally managed associations of IT professionals.
                The Acropolis Institute of Technology and Research (AITR)
                student chapter was established in 2018 with the aim of
                providing a platform for students to explore, learn, and
                innovate in the field of technology. We organize various events,
                workshops, and seminars to help students build their technical
                skills and connect with industry experts. 🚀🔧📚💡
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Link to={"/team"} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Meet Our Team
          </Link>          
        </div>
      </Vortex>
    </div>
  )
}
