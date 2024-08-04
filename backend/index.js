import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
dotenv.config({});
const app = express();

// midlewere 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const  corsOptions  = {
    origin:"http//localhost:5173",
    credentials:true
}
app.use(cors(corsOptions));




const port = process.env.PORT || 3000


app.listen(port , ()=>{
    connectDB(), 
    console.log(`Server start on port : ${port}`);
})