import PostMessage from "../models/postMessage.js";


const getPosts = async(req,res)=>{
try {
     postMessages =  await PostMessage.find();
     res.status(200).json(postMessage);
     
} catch (error) {
    console.log(error)
    res.status(404).json(error);
}
}

const creatPost = async (req,res)=>{
       
    const post = req.body;
    const newPost = new PostMessage(post);
     
        try {
            await newPost.save();
            res.status(201).json(newPost)

        } catch (error) {
            res.status(409).json(error); 
        }
  


}


export {getPosts} ;


