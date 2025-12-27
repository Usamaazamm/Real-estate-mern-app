import express from 'express';
import dotenv from 'dotenv';
import conn from './connectdb.js'
import router from './Api/Routes/userRoute.js';

conn();
const app = express();
app.use(express.json());



app.get("/", (req, res) => {
  res.send({
    message:"everthing is working now"
  })
})



const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app is working on port ${port}`)
});

app.use("/api/auth", router)