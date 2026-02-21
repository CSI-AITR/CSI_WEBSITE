import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {createEvent,deleteEvent,editEvent,getAllActiveEvents,getAllEvents,getAllPastEvents,getEventById,toggleActiveStatus,removeEventGlimpse} from "../controllers/event.controller.js";
import {upload} from "../middlewares/multer.middleware.js";

const router=Router();

router.post("/createEvent",verifyJWT,upload.fields([ {name:"thumbnail",maxCount:1}, {name:"poster",maxCount:1}] ),createEvent);
router.delete("/delete/:eventId",verifyJWT,deleteEvent);

router.patch(
            "/edit/:eventId"
            ,verifyJWT,
            upload.fields([ {name:"thumbnail",maxCount:1}, {name:"poster",maxCount:1} ,{name:"glimpse1",maxCount:1}, {name:"glimpse2",maxCount:1}] )
            ,editEvent
        );

router.patch("/toggleActiveStatus/:eventId",verifyJWT,toggleActiveStatus);
router.get("/getEvent/:eventId",getEventById);
router.get("/active",getAllActiveEvents);
router.get("/allEvents",getAllEvents);
router.get("/pastEvents",getAllPastEvents);
router.post("/removeEventGlimpse/:eventId",verifyJWT,removeEventGlimpse);

export default router;