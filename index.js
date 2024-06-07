import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Database/config.js";
import router from "./Routers/router.js";

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors({
    origin:"*",
    credentials:true
}));

app.use("/api",router);

connectDB();
app.get("/",(req,res)=>{
    res.status(200).send(`
    <h1>Node Day 5 Task</h1>
    <h5><strong>/api/register:</strong> Create a new user account.</h5>
    <h5<strong>/api/login:</strong> Log in to an existing user account.</h5>
    <h5><strong>/api/forgot-password:</strong> Reset your password if forgotten.</h5>
    <h6>This is the main endpoint of our Node.js application for day 5 tasks, 
    providing information about user account-related functionalities.</h6>
`)
})
app.listen(process.env.PORT||3000,()=>{
    console.log("app is listening to the port");
})
