import React from 'react'
import { MdOutlineDateRange } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';


export const EventCard = ({event}) => {

  const navigate = useNavigate();

  return (
    <div className='mx-auto rounded-lg border bg-[#181a1b] border-[#353a3c] shadow-md md:mx-0 p-5 overflow-hidden transition-all duration-300 hover:shadow-xl max-w-[400px] cursor-pointer'
      onClick={()=>{
        navigate(`/event/${event._id}`);
      }}
    >
        <div className='max-h-52 w-full overflow-hidden rounded-lg mb-4'>
          <img
            alt='event_card'
            src={event?.thumbnail}
            loading='lazy'
            width={400}
            height={400}
            className='mx-auto object-bottom'
          />
        </div>
        <div>
          <div className='text-[#e8e6e3] mb-2 font-rubik text-lg font-bold tracking-tight md:text-2xl'>
              {event?.eventName}
          </div>
          <div className='h-[2px] w-3/4 bg-grey50 opacity-10'></div>
          <div className='flex items-center justify-between'>
            <div className='flex flex-row  text-pure-greys-100' >
              <MdOutlineDateRange size={20}/>
              <p className='text-sm ml-2 '>{event?.eventDate}</p> 
            </div>
            <div className="flex md:ml-2 text-pure-greys-100">                    
              <IoTimeSharp size={20}/>
              <p className='text-sm ml-1 '> {event?.eventTime}</p>
            </div>
            {/* registerNow Button */}
            <Link to={event?.registrationLink}
              target='_blank'
            >
              <button className={`${!event?.isActive?"blackButton":"yellowButton"}`}
                onClick={(e)=>e.stopPropagation()}
                disabled={!event?.isActive}
              >
                Register Now
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}
