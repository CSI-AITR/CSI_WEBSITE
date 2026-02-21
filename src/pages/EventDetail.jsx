import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineDateRange } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import HoverBorderGradient from '../components/ui/hover-border-gradient';
import { getEventDetails } from '../services/operations/eventApi';


export const EventDetail = () => {  
  const { id } = useParams();
  const [event,setEvent]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();

  const fetchEventDetails=useCallback(async ()=>{
    try{
      setLoading(true);
      const response= await getEventDetails(id,navigate);
      if(!response){
        throw new Error("Event details not found");
      }

      setEvent(response)
      setLoading(false);

    }catch(error){
      console.log("Error while Fetching event detail page in frontend: ",error)
    }
  },[id,navigate]);

  useEffect(()=>{
    fetchEventDetails();
  },[fetchEventDetails]);

  if(loading){
    return <div className='h-screen w-screen flex items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div className='spinner'></div>
        <div className='text-white mt-2 text-xl'>Loading...</div>
      </div>      
    </div>
  }

  return (
    <div className="h-full w-full flex-col items-center p-2  max-w-maxContent mx-auto">
        
        <h1  className="text-center bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent font-bold  md:text-5xl text-2xl p-2 m-4 mt-5 md:mt-4  transition-all duration-300 font-sans">{event?.eventName}</h1>
        
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4 mb-4 h-[1px] w-full" />
        
        <div className='flex flex-col  md:flex-row md:justify-between items-center '>
            {/* image */}
            <div className='md:w-[40%]'>
              <img 
                src={event?.poster} 
                alt="img" 
                className='rounded-3xl md:m-4  '                           
              />
            </div>
            {/* description */}
            <div className='md:w-[55%] p-4'>
                <p className='text-justify whitespace-pre-line md:text-base text-sm text-richblack-25 font-light'>{event?.eventDescription}</p>
                
                {/* time, date and location */}
                <div className='flex flex-col text-richblack-25 mt-4'>
                  <div className='flex flex-row' >
                    <MdOutlineDateRange size={20}/>
                    <p className='text-sm ml-4 w-1/3'>{event?.eventDate}</p> 
                  </div>
                  <div className="flex md:ml-0 mt-4">                    
                    <IoTimeSharp size={20}/>
                    <p className='text-sm ml-4 w-1/3'>{event?.eventTime}</p>
                  </div>
                  <div className="flex md:ml-0 mt-4">                    
                    <MdPlace size={20}/>
                    <p className='text-sm ml-4 w-1/3'>{event?.eventVenue}</p>
                  </div>
                </div>
            </div>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-4 mb-4 h-[1px] w-full" />

        {/* Register Now Button */}
        {
          event?.isActive &&
          <div className='flex justify-center mb-4'>
            <Link to={event?.registrationLink} target='_blank'>
              <button>            
                      <HoverBorderGradient
                        containerClassName="rounded-full"
                        as="button"
                        className=" bg-zinc-95 text-white flex items-center space-x-2">                
                        <span>Register Now</span>
                      </HoverBorderGradient>            
                </button>      
            </Link>  
          </div>
        }
        {/* Throwback Gallery section */}
        {
          !event?.isActive && event?.glimpse1 && event?.glimpse2 &&
            <div>
              <h2 className="text-center bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent font-bold  md:text-5xl text-2xl p-2 m-4 mt-5 md:mt-4  transition-all duration-300 font-sans">Throwback Gallery</h2>

              <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 mb-10">
                  <img
                    src={event?.glimpse1}
                    alt="eventGlimpse1"
                    className="w-full md:w-1/2 rounded-lg shadow-md"
                  />
                  <img
                    src={event?.glimpse2}
                    alt="eventGlimpse2"
                    className="w-full md:w-1/2 rounded-lg shadow-md"
                  />
                  
              </div>
            </div>  
        }
    </div>
  );
};