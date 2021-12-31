import express from 'express';

import { getPosts , creatPost,updatePost ,deletePost, likePost} from "../controllers/posts.js";
import  auth from '../middelware/auth.js';
const route = express.Router();
 
route.get("/", getPosts);
route.post("/", auth,creatPost);
route.patch("/:id",auth, updatePost );
route.delete('/:id',auth,deletePost);
route.patch('/like/:id',auth,likePost);
export default route;