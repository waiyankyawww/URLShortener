import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // to go back to the old string parser if the new one didnt work while connecting
      useUnifiedTopology: true, // to use new monogoDB new connection management engine
    });
    console.log("Database is connected");
  } catch (error) {
    console.log("error while connecting database");
    console.log(error);
    process.exit(1);
  }
};
