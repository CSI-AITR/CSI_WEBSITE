import React from 'react'
import  WavyBackground  from "../ui/wavy-background";
import  AnimatedTooltip  from "../ui/animated-tooltip";


// const team = [
//     {
//       id: 1,
//       name: 'Nishchal Vyas',
//       designation: 'Software Developer',
//       image:
//         'https://res.cloudinary.com/dymfhvwou/image/upload/v1710008266/AITRCSI/IMG-20240224-WA0004_-_Nishchal_Vyas_z4yzof.jpg',
//     },
//     {
//       id: 2,
//       name: 'Manan Atal',
//       designation: 'Software Developer',
//       image:
//         'https://res.cloudinary.com/dymfhvwou/image/upload/v1710690771/AITRCSI/dummy1-removebg-preview_yo9l8k.png',
//     },
//     {
//       id: 3,
//       name: 'Parth Gupta',
//       designation: 'Software Developer',
//       image:
//         'https://res.cloudinary.com/dymfhvwou/image/upload/v1710436200/AITRCSI/Parth_Gupta_uzbdd8.png',
//     },
//     {
//       id: 4,
//       name: 'Aman Wairagkar',
//       designation: 'Software Developer',
//       image:
//         'https://res.cloudinary.com/dymfhvwou/image/upload/v1710008265/AITRCSI/IMG-20240224-WA0013_-_Aman_Vishal_u5apmb.jpg',
//     },
//     {
//         id: 5,
//         name: 'Tushar Jaiswal',
//         designation: 'Software Developer',
//         image:
//           'https://res.cloudinary.com/dymfhvwou/image/upload/v1710436195/AITRCSI/Tushar_Jaiswal_hcscad.jpg',
//       },
//   ];



export const Background = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground  className=" w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                Meet Our Team
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                Meet the Tech Titans Driving Our Innovation Journey
            </p>
            {/* <div  className="flex flex-row items-center justify-center mb-10 w-full mt-4">
                <AnimatedTooltip items={team} />
            </div> */}
        </WavyBackground>
    </div>
  )
}
