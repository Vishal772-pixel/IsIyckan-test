import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URI; // Access your variables here
    // console.log(connectionString)

    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`\nMongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB  connection error:", error);
    process.exit(1);
  }
};

export default connectDB;