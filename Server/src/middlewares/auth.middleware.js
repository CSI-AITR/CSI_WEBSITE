import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";


const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const accessToken =
            req.cookies?.accessToken ||
            req.header("Authorization")?.replace("Bearer ", "");

        if (!accessToken) {
            throw new ApiError(401, "Access Token not found");
        }

        const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        // Only allow admin role tokens
        if (!decodedToken || decodedToken.role !== "admin") {
            throw new ApiError(403, "Unauthorized: Admin access required");
        }

        req.user = decodedToken;
        next();

    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token");
    }
});

export { verifyJWT };