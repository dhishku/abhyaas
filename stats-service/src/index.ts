import mongoose from "mongoose";
import { MONGO_URL } from "../secure-info";

import { app } from "./app";

const start = async () => {
  try {
    await mongoose.connect(MONGO_URL, {});
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });
};

start();
