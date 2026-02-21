import React, { useEffect, useState } from 'react'
import {EventCard} from './EventCard';
import { getAllActiveEvents, getAllPastEvents } from '../../services/operations/eventApi';


export const UpcomingEvents = () => {

  const [activeEvents,setActiveEvents]=useState([]);
  const [pastEvents,setPastEvents]=useState([]);
  const [activeLoading,setActiveLoading]=useState(false);
  const [pastLoading,setPastLoading]=useState(false)

  const fetchActiveEvents=async ()=>{
    try{
       setActiveLoading(true);
       const response=await getAllActiveEvents();
       setActiveEvents(response);  
       setActiveLoading(false);
    }catch(error){
       console.log("Error while calling getAllActiveEvents api in event Page: ",error);
    }
 }

 const fetchPastEvents=async ()=>{
  try{
     setPastLoading(true);
     const response=await getAllPastEvents();   
     setPastEvents(response);
     setPastLoading(false);  
  }catch(error){
     console.log("Error while calling getAllActiveEvents api in event Page: ",error);
  }
}

  useEffect(()=>{
    fetchActiveEvents();
    fetchPastEvents();
  },[]);

  

  return (
    <div className="overflow-x-hidden ">
        <h1 className="text-center font-bold text-4xl text-white p-8"> Upcoming Events</h1>
        <div>
          {
            activeLoading?
            (
              <div className='flex items-center justify-center mb-4'>
                  <div className='spinner'></div>
              </div>
            ):
            !activeEvents.length?
            (
              
              <p className='text-neutral-400 text-center -mt-4 xl:text-2xl font-semibold mb-6'>Please check back later for any updates on upcoming events. There are no events scheduled for now.</p>
            )
            :
            (
              <div className='px-4 max-w-maxContent mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10'>
                {
                  activeEvents.map((event,index)=>(
                    <EventCard
                      event={event}
                      key={event._id}
                    />
                  ))
                }
              </div>
            )
          }          
        </div>


        <h1 className="text-center font-bold text-4xl text-white p-8 -mt-8"> Past Events</h1>      
        <div>
          {
            pastLoading?
            (
                <div className='flex items-center justify-center mb-10'>
                    <div className='spinner'></div>
                </div>
            ):
            !pastEvents.length?
            (                
                <p className='text-neutral-400 text-center -mt-4 xl:text-2xl font-semibold mb-12'>Currently, there are no past events to display. Please check back later for any updates.</p>
            )
            :
            (
              <div className='px-4 max-w-maxContent mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10'>
                {
                  pastEvents.map((event,index)=>(
                    <EventCard
                      event={event}
                      key={event._id}
                    />
                  ))
                }
              </div>
            )
          }          
        </div>

      </div>
  )
}


