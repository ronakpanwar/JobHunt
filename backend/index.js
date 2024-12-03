import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import bodyParser from 'body-parser'
import connectDB from "./utils/db.js";
import userRoute from './routes/user.routes.js'
import companyRoute from './routes/company.routes.js'
import jobRoute from './routes/job.routes.js'
import applicationRoute from './routes/application.routes.js'
dotenv.config({});
const app = express();

// midlewere 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const  corsOptions  = {
    origin:"https://job-hunt-new-ui.vercel.app",
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}
app.use(cors(corsOptions));

// all apis
app.use('/', (req,res)=>{
  res.json('Hello');
})

app.use('/api/user' , userRoute);
app.use('/api/company' , companyRoute );
app.use('/api/job', jobRoute )
app.use('/api/application' , applicationRoute)


const port = 3000


app.listen(port , ()=>{
    connectDB(), 
    console.log(`Server start on port : ${port}`);
})
