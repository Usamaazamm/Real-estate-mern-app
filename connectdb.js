import mongoose from "mongoose";

const conn =() => mongoose.connect(process.env.MongoURL)
  .then(() => console.log("connected to database "))
  .catch((err) => console.log(err));

export default conn;
