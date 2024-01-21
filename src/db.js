import mongoose from "mongoose";
import { URI_DB } from "./config.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(URI_DB)
        console.log('connect DB')
    } catch (e) {
        console.log(e)       
    }
}