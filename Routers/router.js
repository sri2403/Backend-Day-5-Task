import  express  from "express";
import { forgotPassword, loginUser, registerUser } from "../Controllers/controller.js";

const router=express.Router();

router.use("/register",registerUser)
router.use("/login",loginUser)
router.use("/forgot-password",forgotPassword)

export default router;