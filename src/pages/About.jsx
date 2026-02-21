import React from 'react';
import { data } from '../data/aboutPage';
import { HeroSection } from '../components/aboutPage/HeroSection';
import TracingBeam from '../components/ui/tracing-beam';



export const About = () => {
  return (
    <div className="flex flex-col   mx-auto items-center justify-center">

      <div className='hidden md:block w-screen'>
        <HeroSection/>
      </div>
      
      <div className='hidden lg:block'>
        <TracingBeam>
          <div className="flex flex-col justify-center gap-4 items-center mt-9 max-w-maxContent mb-8" >
            {data.map((content) => (
              <div
                key={content.id}
                className="flex flex-col justify-center text-white"            
              >
                <h4 className="font-bold text-xl mb-2">{content.heading}</h4>
                <p className="text-neutral-300 text-base text-justify">{content.description}</p>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>

      <div className='lg:hidden block'>
        <div className="px-4 flex flex-col justify-center gap-4 items-center mt-4 max-w-maxContent mb-8" >
            {data.map((content) => (
              <div
                key={content.id}
                className="flex flex-col justify-center text-white"            
              >
                <h4 className="font-bold text-xl mb-2">{content.heading}</h4>
                <p className="text-neutral-300 text-base text-justify">{content.description}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};
