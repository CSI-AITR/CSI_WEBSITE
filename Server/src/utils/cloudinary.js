import {v2 as cloudinary} from "cloudinary";
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
});

const uploadToCloudinary=async(localFilePath)=>{
    try{
        if(!localFilePath) return null;

        const response=await cloudinary.uploader.upload(localFilePath,{resource_type:"auto", folder:process.env.CLOUDINARY_FOLDER});

        fs.unlinkSync(localFilePath);

        return response;
    }
    catch(error){
        fs.unlinkSync(localFilePath);

        return null;
    }
}

const deleteFromCloudinary=async (publicUrl)=>{
    try{
        if(!publicUrl) return null;

        // Extract public_id including folder prefix from the Cloudinary URL
        // URL format: https://res.cloudinary.com/<cloud>/image/upload/v<version>/<folder>/<filename>.<ext>
        const urlParts = publicUrl.split('/');
        const uploadIndex = urlParts.indexOf('upload');
        if(uploadIndex === -1) return null;

        // Everything after 'upload/v<version>/' is the public_id (with folder)
        const afterUpload = urlParts.slice(uploadIndex + 1);
        // Skip the version segment (starts with 'v' followed by digits)
        const withoutVersion = afterUpload[0]?.match(/^v\d+$/) ? afterUpload.slice(1) : afterUpload;
        // Remove file extension from last segment
        const lastSegment = withoutVersion[withoutVersion.length - 1].split('.')[0];
        const publicId = [...withoutVersion.slice(0, -1), lastSegment].join('/');

        const response = await cloudinary.uploader.destroy(publicId);
        return response;

    }catch(error){
        console.log("Error while deleting uploaded file from cloudinary: ",error.message);
    }
}



export {uploadToCloudinary,deleteFromCloudinary}