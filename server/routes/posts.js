import express from 'express';

import { getPosts , creatPost,updatePost ,deletePost, likePost} from "../controllers/posts.js";

const route = express.Router();
 
route.get("/", getPosts);
route.post("/", creatPost);
route.patch("/:id",updatePost );
route.delete('/:id',deletePost);
route.patch('/like/:id',likePost);
export default route;