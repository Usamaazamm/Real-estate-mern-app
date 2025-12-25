import express from "express";
import dotenv from "dotenv";
import conn from "./connectdb.js";

dotenv.config();

conn();

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).send({
    message: "everything is working now",
  });
});

app.listen(port, (req, res) => {
  console.log(`app is running on port ${port}`);
});
