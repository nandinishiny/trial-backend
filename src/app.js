import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser';
//to access cookies from client and perform basic crud operatons.

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
//best security practices
app.use(express.json({limit: "16kb"})) //we accept data upto 16kb only.
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
//only server can read this.


export default app;