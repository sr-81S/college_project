//import all file and configure server

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";



//configure the server properties and middlewares

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(cors());


//router configure area



//mongoose and server connection
const PORT = process.env.PORT || 6001;

mongoose.set("strictQuery",false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=>console.log(`SERVER Connected on port ${PORT} and DB Connected`))
}).catch((error)=>{
    console.log(`${error} Server Error`);
})



