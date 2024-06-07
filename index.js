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
    res.status(200).send("welcome")
})
app.listen(process.env.PORT||3000,()=>{
    console.log("app is listening to the port");
})
