import { apiConnector } from "../apiConnector";
import { eventEndPoints } from "../apis";

const {ACTIVE_EVENTS,PAST_EVENTS}=eventEndPoints;

export const getAllActiveEvents=async()=>{
    let result=[];
    try{    
        const response=await apiConnector(
            "GET",
            ACTIVE_EVENTS
        );
        if(!response?.data?.success){
            throw new Error("Error while fetching active Events in frontend");
        }

        result=response?.data?.data;

    }catch(error){
        console.log("ERROR while fetching Active Events in Frontend: ",error);
    }

    return result;
}

export const getAllPastEvents=async()=>{
    let result=[];
    try{    
        const response=await apiConnector(
            "GET",
            PAST_EVENTS
        );
        if(!response?.data?.success){
            throw new Error("Error while fetching Past Events in frontend");
        }

        result=response?.data?.data;

    }catch(error){
        console.log("ERROR while fetching Past Events in Frontend: ",error);
    }

    return result;
}


export const getEventDetails=async(_id,navigate)=>{
    let result=[];
    
    try {
        const url=process.env.REACT_APP_BASE_URL+`/event/getEvent/${_id}`
        const response=await apiConnector(
            "GET",
            url,           
        );

        if(!response?.data?.success){
            throw new Error("Error while fetching Past Events in frontend");
        }

        result=response?.data?.data;

    } catch (error) {
        navigate(`/error`);
        console.log("ERROR while fetching Event detail in Frontend: ",error);
    }

    return result;
}