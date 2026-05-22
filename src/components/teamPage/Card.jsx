import React from 'react';
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { FaLinkedinIn } from "react-icons/fa";
import { transformCloudinaryUrl } from '../../utils/cloudinaryTransform';

export const Card = ({ data }) => {
  return (
    <CardContainer className="inter-var w-[90vw] max-w-[280px] sm:w-[280px] mx-auto">
      <CardBody className="relative group/card w-full h-[380px] sm:h-[400px] rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_8px_30px_rgb(6,182,212,0.15)] transition-all duration-500 ease-out cursor-pointer">
        
        {/* Full Card Background Image */}
        <img
          src={transformCloudinaryUrl(data.imageURL)}
          alt={data.name}
          className="absolute inset-0 w-full h-full object-cover z-0 group-hover/card:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
          decoding="async"
        />

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-300" />

        {/* Bottom Left Content Area */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full">
          <CardItem translateZ="50" className="w-full">
            <div className="flex justify-between items-end w-full">
              
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-white tracking-tight group-hover/card:text-cyan-400 transition-colors duration-300">
                  {data.name}
                </h2>
                <p className="text-sm text-neutral-300 mt-1 font-medium">
                  {data.position}
                </p>
              </div>

              <a
                href={data.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-cyan-500/20 hover:scale-110 border border-white/20 transition-all duration-300"
                aria-label={`${data.name}'s LinkedIn`}
                onClick={(e) => e.stopPropagation()}
              >
                <FaLinkedinIn className="text-lg text-white group-hover/card:text-cyan-400 transition-colors" />
              </a>

            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
