import mongoose from "mongoose";

const DB_URL = 'mongodb+srv://MtsKrummel:lautaro2004@cluster0.s8clctr.mongodb.net/'

export const connectDB = async() => {
    try {
        await mongoose.connect(DB_URL);
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
    }
};