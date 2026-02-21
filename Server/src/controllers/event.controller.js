import {asyncHandler} from "../utils/asyncHandler.js";
import  { ApiError } from "../utils/ApiError.js";
import  { ApiResponse } from "../utils/ApiResponse.js"
import {deleteFromCloudinary, uploadToCloudinary} from "../utils/cloudinary.js";
import {Event} from "../models/event.model.js"
import { isValidObjectId } from "mongoose";


const createEvent=asyncHandler(async (req,res)=>{
    //fetching data
    const {registrationLink,eventDate,eventVenue,eventTime,eventDescription,eventName}=req.body;

    //validation checks
    if([registrationLink,eventDate,eventVenue,eventTime,eventDescription,eventName].some((field) => !field || field.trim() === "")){
        throw new ApiError(400,"Some fields are missing");
    }

    const thumbnailLocalpath=req.files?.thumbnail[0]?.path;
    const posterLocalpath=req.files?.poster[0]?.path;

    if(!thumbnailLocalpath || !posterLocalpath){
        throw new ApiError(400,"Media files are missing");
    }

    //uploading images and poster to cloudinary
    const uploadedThumbnail=await uploadToCloudinary(thumbnailLocalpath);
    const uploadedPoster=await uploadToCloudinary(posterLocalpath);

    if(!uploadedThumbnail || !uploadedPoster){
        throw new ApiError(500,"Failed to upload images to Cloudinary. Please check your Cloudinary credentials in .env");
    }

    //inserting event in mongodb document
    const eventCreated=await Event.create({
        registrationLink,
        eventDate,
        eventDescription,
        eventName,
        eventTime,
        eventVenue,
        thumbnail:uploadedThumbnail.secure_url,
        poster:uploadedPoster.secure_url
    });

    if(!eventCreated){
        throw new ApiError(500,"Error while creating event");
    }

    return res.status(200).json(
        new ApiResponse(200,eventCreated,"Event Created Successfully")
    )

});

const deleteEvent=asyncHandler(async (req,res)=>{
    const {eventId}=req.params;

    //validation checks
    if (!eventId || !isValidObjectId(eventId)) {
        throw new ApiError(400, !eventId ? "event_id is missing" : "Invalid Event Id");
    }

    const event=await Event.findById(eventId);

    if(!event){
        throw new ApiError(404,"Event not found"); 
    }

    //removing event uploaded media from cloudinary
    await deleteFromCloudinary(event?.thumbnail);
    await deleteFromCloudinary(event?.poster);

    //removing event from db
    const deletedEvent=await Event.deleteOne({_id:eventId});

    return res.status(200).json(new ApiResponse(200,deletedEvent,"Event deleted successfully"))
});

const getEventById=asyncHandler(async (req,res)=>{
    const {eventId}=req.params;

    //validation checks
    if (!eventId || !isValidObjectId(eventId)) {
        throw new ApiError(400, !eventId ? "event_id is missing" : "Invalid Event Id");
    }

    const event=await Event.findById(eventId);

    if(!event){
        throw new ApiError(404,"Event not found"); 
    }

    return res.status(200).json(new ApiResponse(200,event,"Event details fetched successfully"));
});

const toggleActiveStatus=asyncHandler(async (req,res)=>{
    const {eventId}=req.params;

    //validation checks
    if (!eventId || !isValidObjectId(eventId)) {
        throw new ApiError(400, !eventId ? "event_id is missing" : "Invalid Event Id");
    }
    
    const event=await Event.findById(eventId);

    event.isActive=!event.isActive;

    const toggledEvent= await event.save({validateBeforeSave:false});

    return res.status(200).json(new ApiResponse(200,toggledEvent,"Event active status toggled successfuly"));
});

const getAllEvents=asyncHandler(async (_,res)=>{
    const allEvents= await Event.find({});

    if(!allEvents.length){
        return res.status(200).json(new ApiResponse(200,{},"No events found"));
    }

    return res.status(200).json(new ApiResponse(200,allEvents,"All events fetched successfully"));
});

const editEvent=asyncHandler(async (req,res)=>{
    const {eventId}=req.params;
    const {registrationLink,eventDate,eventVenue,eventTime,eventDescription,eventName}=req.body;
    let thumbnailLocalPath;
    let posterLocalPath;
    let eventGlimpseImage1LocalPath;
    let eventGlimpseImage2LocalPath;
    let uploadedThumbnail;
    let uploadedPoster;
    let uploadedGlimpse1;
    let uploadedGlimpse2;

    //validation checks
    if (!eventId || !isValidObjectId(eventId)) {
        throw new ApiError(400, !eventId ? "event_id is missing" : "Invalid Event Id");
    }

    if(req.files && Array.isArray(req.files.thumbnail) && req.files.thumbnail.length>0){
        thumbnailLocalPath=req.files?.thumbnail[0]?.path;
        const uploadThumbnail=await uploadToCloudinary(thumbnailLocalPath);
        uploadedThumbnail=uploadThumbnail?.secure_url;
    }

    if(req.files && Array.isArray(req.files.poster) && req.files.poster.length>0){
        posterLocalPath=req.files?.poster[0]?.path;
        const uploadPoster=await uploadToCloudinary(posterLocalPath);
        uploadedPoster=uploadPoster?.secure_url;
    }

    if(req.files && Array.isArray(req.files.glimpse1) && req.files.glimpse1.length>0){
        eventGlimpseImage1LocalPath=req.files?.glimpse1[0]?.path;
        const uploadGlimpse1=await uploadToCloudinary(eventGlimpseImage1LocalPath);
        uploadedGlimpse1=uploadGlimpse1?.secure_url;
    }

    if(req.files && Array.isArray(req.files.glimpse2) && req.files.glimpse2.length>0){
        eventGlimpseImage2LocalPath=req.files?.glimpse2[0]?.path;
        const uploadGlimpse2=await uploadToCloudinary(eventGlimpseImage2LocalPath);
        uploadedGlimpse2=uploadGlimpse2?.secure_url;
    }
        
    const event=await Event.findById(eventId);

    event.registrationLink = registrationLink || event.registrationLink;
    event.eventDate = eventDate || event.eventDate;
    event.eventVenue = eventVenue || event.eventVenue;
    event.eventTime = eventTime || event.eventTime;
    event.eventDescription = eventDescription || event.eventDescription;
    event.eventName = eventName || event.eventName;
    event.thumbnail=uploadedThumbnail || event.thumbnail;
    event.poster=uploadedPoster ||event.poster;
    event.glimpse1=uploadedGlimpse1 || event.glimpse1;
    event.glimpse2=uploadedGlimpse2 || event.glimpse2;

    const updatedEvent=await event.save();

    if(!updatedEvent){
        throw new ApiError(500,"Error while Updating Event");
    }
    
    return res.status(200).json(new ApiResponse(200,updatedEvent,"Event updated Successfully"));
});

const getAllActiveEvents=asyncHandler(async (_,res)=>{
    const allEvents= await Event.find({isActive:true}).sort({createdAt:-1});

    if(!allEvents.length){
        return res.status(200).json(new ApiResponse(200,{},"No Active events found"));
    }

    return res.status(200).json(new ApiResponse(200,allEvents,"All Active events fetched successfully"));
});

const getAllPastEvents=asyncHandler(async (_,res)=>{
    const allEvents= await Event.find({isActive:false}).sort({createdAt:-1}).limit(9);

    if(!allEvents.length){
        return res.status(200).json(new ApiResponse(200,{},"No Past events found"));
    }

    return res.status(200).json(new ApiResponse(200,allEvents,"All Past events fetched successfully"));
});

const removeEventGlimpse=asyncHandler(async (req,res)=>{
    const {eventId}=req.params;

    if(!eventId || !isValidObjectId(eventId)){
        throw new ApiError(400,!eventId?"Event id is missing":"Invalid Event id");
    }

    const event=await Event.findById(eventId);
    if(!event){
        throw new ApiError(404,"No event found with id provided");
    }

    event.glimpse1="";
    event.glimpse2="";

    await event.save({validateBeforeSave:false});

    return res.status(200).json(new ApiResponse(200,event,"Event glimpses removed successfully"));
})


export {
    createEvent,
    deleteEvent,
    getEventById,
    toggleActiveStatus,
    getAllEvents,
    editEvent,
    getAllActiveEvents,
    getAllPastEvents,
    removeEventGlimpse
}