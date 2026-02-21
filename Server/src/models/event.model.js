import mongoose, {Schema} from "mongoose";

const eventSchema=new Schema({
    eventName:{
        type:String,
        required:true,
    },
    eventDescription:{
        type:String,
        required:true,
    },
    eventTime:{
        type:String,
        required:true,
        trim:true
    },
    eventVenue:{
        type:String,
        required:true,
        trim:true
    },
    isActive:{
        type:Boolean,
        default:true,
        required:true
    },
    eventDate:{
        type:String,
        required:true,
        trim:true
    },
    registrationLink:{
        type:String,
        required:true,
        trim:true
    },
    poster:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    glimpse1:{
        type:String,
        default:"",
    },
    glimpse2:{
        type:String,
        default:"",
    }

},{timestamps:true})

export const Event=mongoose.model("Event",eventSchema);