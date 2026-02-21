import {asyncHandler} from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";


const options = {
    httpOnly: true,
    secure: true,
}


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    // Validate against hardcoded admin credentials from environment variables
    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
        throw new ApiError(400, "Invalid credentials. Access denied.");
    }

    // Generate JWT for admin
    const accessToken = jwt.sign(
        { email, role: "admin" },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME }
    );

    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .json(
            new ApiResponse(
                200,
                { accessToken },
                "Admin logged in successfully"
            )
        );
});


const logoutUser = asyncHandler(async (req, res) => {
    return res.status(200)
        .clearCookie("accessToken", options)
        .json(
            new ApiResponse(200, {}, "Admin Logged Out Successfully")
        );
});


export {
    loginUser,
    logoutUser,
}