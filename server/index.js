import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import postsRoutes from './routes/posts.js';
const app = express();

app.use(bodyParser.json({limite : "30mb" , extended : true }));
app.use(bodyParser.urlencoded({limite : "30mb" , extended : true }));
app.use(cors());


app.use('/posts',postsRoutes)

const URL = "mongodb+srv://yassine:123698745@cluster0.yr2lt.mongodb.net/memory?retryWrites=true&w=majority"
const PORT = 8000;
 
mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, console.log("server is running sucsessfully")))
  .catch ( (err)=> console.log(err))
 
