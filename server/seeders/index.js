import mongoose from "mongoose";
import { MONGO_URI } from "../config/keys.js";
import shopSeeder from "./shopSeeder.js";

const runSeeders = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("MongoDB connected successfully");

        await shopSeeder();

        console.log("Seeders executed successfully");

        mongoose.connection.close();
    } catch (error) {
        console.error('Error running seeders:', error);
    }
}

runSeeders();
