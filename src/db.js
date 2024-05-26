import mongoose from "mongoose";

<<<<<<< HEAD
const DB_URL = 'mongodb://localhost/taskinproject'
=======
const DB_URL = '' //La url para conectarte a la base de datos. Por defecto: mongodb://localhost:4000/api
>>>>>>> d71880a227cab0031d3404d59ffacccaa6c0b469

export const connectDB = async() => {
    try {
        await mongoose.connect(DB_URL);
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
    }
};