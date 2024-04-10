import mongoose from "mongoose";

const DB_URL = '' //La url para conectarte a la base de datos. Por defecto: mongodb://localhost:4000/api

export const connectDB = async() => {
    try {
        await mongoose.connect(DB_URL);
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
    }
};