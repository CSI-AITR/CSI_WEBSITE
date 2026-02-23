import React from 'react'
import ShaderBackground from "./ShaderBackground"
import SpotlightButton from "./SpotlightButton";


export const HeroSection = () => {
  return (
    <div className="w-full mx-auto rounded-md relative h-screen overflow-hidden">
      {/* Shader Gradient Background */}
      <ShaderBackground />

      {/* Content on top */}
      <div className="relative z-10 flex items-start flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <div className="max-w-4xl w-full">
          <h2 className="text-white  text-5xl md:text-5xl text-left">
            Welcome To
          </h2>

          <div className="flex items-baseline gap-6 text-[#1DA1F2] mt-2">
            <span className="text-9xl md:text-9xl font-bold">CSI</span>
            <span className="text-5xl md:text-7xl font-bold">AITR</span>
          </div>
          <p className="text-richblack-50 text-[16px] md:text-xl max-w-2xl mt-9 mb-9 text-left">
            Established in 2018, the AITR Student Chapter of the Computer Society of India (CSI) serves as a dynamic hub for technological innovation. We empower students through high-impact workshops, seminars, and industry networking, bridging the gap between academic learning and professional excellence in the IT landscape. 🚀🔧📚💡
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <SpotlightButton />
          </div>
        </div>
      </div>
    </div>
  )
}
