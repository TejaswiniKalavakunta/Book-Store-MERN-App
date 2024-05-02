import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import journalsRoute from "./routes/JournalsRoute.js";
import cors from "cors";
import authRoute from "./routes/AuthRoute.js";

const app = express();

// Middleware for parsing the request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To InsightLog App");
});

app.use("/journals", journalsRoute);
app.use("/auth", authRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
