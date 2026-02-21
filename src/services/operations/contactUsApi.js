import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { contactUsEndPoints } from "../apis";

const {SEND_CONFIRMATION_MAIL}=contactUsEndPoints;

export const mailResponse=async(data)=>{
    let result;
    const toastId = toast.loading("Sending...")
    try{    
        const response=await apiConnector(
            "POST",
            SEND_CONFIRMATION_MAIL,
            data
        );
        if(!response?.data?.success){
            throw new Error("Error while sending contact us details");
        }

        result=response?.data?.success;

    }catch(error){
        console.log("ERROR while sending contact us details in Frontend: ",error);
    }
    toast.dismiss(toastId)
    return result;
}