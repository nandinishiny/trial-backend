// import 'dotenv/config'
//to access from all files
import dotenv from "dotenv"
import app from "./app.js";
import connectDB from "./db/db.js";

dotenv.config({path:'/.env'}) //we can use ./env or ./.env both works.
//since async function returns a process.
const port = process.env.PORT || 3000;
const hostname = process.env.HOST || 'localhost';
connectDB().then(()=>{
    app.listen(port,hostname,()=>{
        console.log(`Server running at http://${hostname}:${port}/`)
    })
}).catch((err)=>{`mongodb connection has failed ${err}`});


