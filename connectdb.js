import mongoose from "mongoose";

const conn  =()=> mongoose.connect ("mongodb://usamaazam:Usama123@cluster1-shard-00-00.l063l.mongodb.net:27017,cluster1-shard-00-01.l063l.mongodb.net:27017,cluster1-shard-00-02.l063l.mongodb.net:27017/Real-Estate?replicaSet=atlas-8bgren-shard-0&ssl=true&authSource=admin")
  .then(() => console.log("connected to database "))
  .catch((err) => console.log(err));

export default conn;
