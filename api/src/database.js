"use strict";

import { config } from './config';
import mongoose from "mongoose";
import * as models from "./Model";

const environment = process.env.NODE_ENV || "develop";
const db = config[environment].databaseUri;

console.log("Environment: " + environment);

mongoose.connect(db);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to " + db);
});

mongoose.connection.on("error", (error) => {
  console.log("Mongoose connection error: " + error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from " + db);
});

process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose disconnected from "+ db + " due app termination");
    process.exit(0);
  });
});