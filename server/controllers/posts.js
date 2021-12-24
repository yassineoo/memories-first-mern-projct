import Mongoose  from "mongoose";
import PostMessage from "../models/postMessage.js";


console.log(PostMessage);

const getPosts = async(req,res)=>{
try {
     const postMessages =  await PostMessage.find();
     res.status(200).json(postMessages);
     
} catch (error) {
    console.log(error)
    res.status(404).json(error);

}
}


const creatPost = async (req,res)=>{
       
    const post = req.body;


    console.log(req.body)
          try {
         const newPost = PostMessage(post);
          console.log(newPost);
          await newPost.save();
            
            res.status(201).json(newPost)

        } catch (error) {
            console.log(error);
            res.status(409).json(error); 
        }
    }

const updatePost = async(req,res)=>{
    const {id:_id}=req.params;
    const post = req.body;
    if(! Mongoose.Types.ObjectId.isValid(_id) ) return res.status(404).send('no post zith that Id');

    try {
        const updatedPost =  PostMessage.findByIdAndUpdate(_id,post, {new : true} )
        res.status(202).json(updatedPost)
    } catch (error) {
        res.status(409).json(error)
    }
  

}








export {getPosts,creatPost , updatePost} ;



