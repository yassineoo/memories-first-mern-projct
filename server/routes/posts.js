import express from 'express';

import { getPosts , creatPost } from "../controllers/posts.js";

const route = express.Router();
 
route.get("/", getPosts);
route.post("/", creatPost)
export default route;