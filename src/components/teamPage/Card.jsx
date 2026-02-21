"use client";
import React from 'react'
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { FaLinkedinIn } from "react-icons/fa";

export const Card = ({data}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-richblack-900 border-white/[0.2]  w-auto sm:w-[18rem] h-auto max-h-[417px] max-w-[255px] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
            {/* team member name */}
          {data.name} 
        </CardItem>

        <div className='flex justify-between'>
            <CardItem
            as="p"
            translateZ="60"
            className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              {data.position}
            </CardItem>

            <CardItem
                translateZ={40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
                <a href={data.linkedInUrl} target='blank'>
                  <FaLinkedinIn className='text-xl hover:text-[#0077b5]  hover:text-2xl transition-all duration-200 '/>
                </a>
            </CardItem>
        </div>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={data.imageURL}
            height="1000"
            width="1000"
            className="h-72 w-full object-fit rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            loading='lazy'
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
