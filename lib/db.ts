import { env } from "@/config";
import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    if (!env.MONGODB_URI) throw new Error("MONGODB_URI is not defined");
    await mongoose.connect(env.MONGODB_URI, { dbName: "ynab-syncer" });
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
