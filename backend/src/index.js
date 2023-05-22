import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auths.js";
import peepRoutes from "./routes/peeps.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connect to mongodb database");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/peeps", peepRoutes);

app.listen(8000, () => {
  connect();
  console.log("Listening to port 8000");
});
