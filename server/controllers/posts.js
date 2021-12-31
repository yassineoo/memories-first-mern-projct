import mongoose  from "mongoose";
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
          try {
         const newPost = PostMessage({...post , creator:req.userId , createdAt : new Date().toISOString()});
          console.log(newPost);
          await newPost.save();
            
            res.status(201).json(newPost)

        } catch (error) {
            console.log(error);
            res.status(409).json(error); 
        }
    }



const updatePost = async(req,res)=>{
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    console.log('update lllll' , id,'---/n', title, ' /n ', message,' /n ',  creator,'    ','     ' , tags);
    res.json(updatedPost);
}


const likePost = async(req,res)=>{
    console.log('start');
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);
    console.log('id : ' , id);
    console.log('id 2: ' , req.userId);
    const index = post.likes.findIndex((id) => id == String(req.userId));
    if (index ==-1){
            post.likes.push(req.userId);
            post.likeCount =  post.likeCount +1;
    }
    else {
            post.likes = post.likes.filter ((id) => id!=  String(req.userId));
            
            post.likeCount = post.likeCount-1;
            
        
    }
     const updated = await PostMessage.findByIdAndUpdate(id, post,{new:true});
     console .log(updated);
    res.status(200).json(updated);
}

const deletePost = async(req,res)=>{
    const { id } = req.params;
    
                try {
                            if (!req.userId) res.status (400).json({message:'please sign in first'});
                            if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

                            const post = await PostMessage.findByIdAndDelete(id);
                            console.log(  'delete');
                            res.json(post);
                                
            } catch (error) {
                            console.log(error);
                            res.status(500).json(error);
            }
}

/*

    const {id:_id}=req.params;
    const post = req.body;
    console.log (_id ,'    ', post);
    if(! Mongoose.Types.ObjectId.isValid(_id) ) return res.status(405).send('no post zith that Id');

    try {
        const updatedPost =  PostMessage.findByIdAndUpdate(_id,{...post,_id}, {new : true} )
        res.status(202).json(updatedPost)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
  

}
*/

export {getPosts,creatPost , updatePost,deletePost,likePost} ;



