import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
//importing router
import authRouter from "./routes/auth.route.js";
import eventRouter from "./routes/event.route.js";
import contactUsRouter from "./routes/contactUs.route.js"

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(cookieParser());
app.use(express.json({limit:"20kb"}));
app.use(express.static("public"))
app.use(express.urlencoded({extended:true ,limit:"20kb"}));



//declaring routes
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/event",eventRouter);
app.use("/api/v1/contact",contactUsRouter);

export {app}