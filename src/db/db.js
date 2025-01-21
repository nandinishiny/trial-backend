import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        console.log(DB_NAME)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI_COMPASS}/${DB_NAME}`);
        console.log(`mongodb connected ${connectionInstance.connection.host}`)
        console.log(`mongodb connected ${connectionInstance.connection}`) //returns object
        // console.log("MongoDB connected:", JSON.stringify(connectionInstance, null, 2));


        
    } catch (error) {
        console.log("mongodb connection error: ",error);
        process.exit(1);
        //process is the program that is running.
        
    }

}
export default connectDB;