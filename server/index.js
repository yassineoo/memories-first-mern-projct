import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv';
import postsRoutes from './routes/posts.js';
const app = express();
dotenv.config();
app.use(bodyParser.json({limite : "30mb" , extended : true }));
app.use(bodyParser.urlencoded({limite : "30mb" , extended : true }));
app.use(cors());

app.get( '/' , (req,res) => {
  console.log('hi');
  res.send('welcome to memory api');
})
app.use('/posts',postsRoutes);

const URL = process.env.URL 
const PORT = process.env.PORT || 8000;
 
mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, console.log("server is running sucsessfully")))
  .catch ( (err)=> console.log(err))
 
