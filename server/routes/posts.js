import express from 'express';

import { getPosts , creatPost,updatePost } from "../controllers/posts.js";

const route = express.Router();
 
route.get("/", getPosts);
route.post("/", creatPost);
route.patch("/:id",updatePost );
export default route;