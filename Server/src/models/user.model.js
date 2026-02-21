import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
        trim: true, 
        index: true
    },
    email:{
        type:String,
        required:true,
        lowercase: true,
        trim: true,         
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true,         
    },       
    password:{
        type:String,
        require:[true,"Password is Required"],
    }
},{timestamps:true})  

userSchema.pre("save",async function(next){

    if(!this.isModified("password")) return next();

    this.password=await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken=function(){
   const payLoad={
     _id:this._id,
     username:this.username,
     email:this.email,
     fullName:this.fullName
   }
   
   return jwt.sign(payLoad,process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRE_TIME});
}




export const User=mongoose.model("User",userSchema)