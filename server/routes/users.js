import express from 'express';

import { signIn , signUp} from "../controllers/users.js";

const route = express.Router();
 
route.post("/in", signIn);
route.post("/up", signUp);
export default route;
