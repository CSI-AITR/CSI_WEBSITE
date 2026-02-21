import { mailSender } from "../utils/mailSender.js";
import { contactUsEmail } from "../mailTemplates.js/contactFormRes.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import  { ApiError } from "../utils/ApiError.js";
import  { ApiResponse } from "../utils/ApiResponse.js"


const contactUsResponse=asyncHandler(async (req,res)=>{
    const { email, firstName, lastName, message, phoneNumber } = req.body;

    if([email,firstName,message,phoneNumber].some((field)=>field.trim()==="")){
        throw new ApiError(400,"All fields are mandatory");
    }

    const userResponse= await mailSender(
        email,
        "Thank You for Contacting Us",
        contactUsEmail(email,firstName,lastName,message,phoneNumber)
    );

    const adminResponse=await mailSender(
        "csiaitr@acropolis.in",
        "Student Query",
        contactUsEmail(email,firstName,lastName,message,phoneNumber)
    );

    if(!userResponse || !adminResponse){
        throw new ApiError(500,"Error while Sending mail")
    }

    return res.status(200).json(new ApiResponse(200,{},"Contact us Form recieved successfully"))

})

export {contactUsResponse}