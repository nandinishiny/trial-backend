// import 'dotenv/config'
//to access from all files
import dotenv from "dotenv"

import connectDB from "./db/db.js";

dotenv.config({path:'/.env'}) //we can use ./env or ./.env both works.

connectDB()