import mongoose from "mongoose";
import dns from "node:dns";

// Memaksa Node.js menggunakan DNS Google agar tidak ECONNREFUSED di Windows
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

export default connectMongoDB;
