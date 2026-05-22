import React from 'react'
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import SpotlightButton from "./SpotlightButton";

export const HeroSection = () => {
  return (
    <AuroraBackground className="w-full mx-auto relative h-screen overflow-hidden">
      {/* Dark overlay to ensure text contrast over aurora */}
      <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div> 
      
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative z-10 flex flex-col items-center justify-center px-4 py-4 w-full h-full text-center"
      >
        <div className="max-w-5xl w-full flex flex-col items-center">
          {/* Modern Top Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]"></span>
            <span className="text-neutral-200 text-xs md:text-sm font-medium tracking-widest font-jakarta uppercase">
              The Official Student Chapter
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="relative flex flex-col items-center justify-center w-full mb-6 mt-2">
            <h1 className="text-[8rem] sm:text-[10rem] md:text-[13rem] lg:text-[16rem] font-outfit font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 leading-[0.8] drop-shadow-2xl select-none z-0">
              CSI
            </h1>
            <div className="absolute bottom-[-15px] md:bottom-[-25px] z-10 w-full flex justify-center">
              <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-outfit font-bold tracking-tight text-white drop-shadow-lg bg-neutral-900/40 backdrop-blur-md px-6 py-2 md:px-8 md:py-3 rounded-2xl border border-white/10 shadow-2xl">
                Computer Society of India
              </span>
            </div>
          </div>

          {/* Subtitle / Acronym */}
          <div className="flex items-center justify-center gap-4 mb-10 mt-10 w-full opacity-90">
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-neutral-400"></div>
            <h2 className="text-amber-400 font-jakarta tracking-[0.3em] uppercase text-xs md:text-lg font-bold">
              AITR Indore
            </h2>
            <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-neutral-400"></div>
          </div>

          {/* Description */}
          <p className="text-blue-50/80 font-jakarta font-light leading-relaxed text-base md:text-xl max-w-2xl mb-12 text-center drop-shadow-md">
            Established in 2018, we serve as a dynamic hub for technological innovation. Bridging the gap between academic learning and professional excellence in the IT landscape.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            <SpotlightButton />
            {/* <a href="#about" className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 font-jakarta text-sm md:text-base font-semibold uppercase tracking-wider">
              About Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 group-hover:text-blue-300 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a> */}
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}
