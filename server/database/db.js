import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URI =
    `mongodb+srv://${USERNAME}:${PASSWORD}@mern.mrir8so.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  });

  mongoose.connection.on("connected", () => {
    console.log("Database Connected Successfully");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database Disconnected");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Error while connecting with the database ", error);
  });
};

export default Connection;
