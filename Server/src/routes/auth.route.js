import { Router } from "express";
import {loginUser, logoutUser} from "../controllers/auth.controller.js";
import {verifyJWT} from "../middlewares/auth.middleware.js"


const router=Router();

router.post("/login",loginUser);
router.post("/logout",verifyJWT,logoutUser);

export default router;