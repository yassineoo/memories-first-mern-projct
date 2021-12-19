import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator :String , 
    tags: [string],
    selectedFile : string ,
    likeCount :{
        type : Number,
        default : 0
    } 
    ,
    createdAt: {
        type : Date , 
        default : Date.now()

    }

}
)

const PostMessage = mangoose.model(PostMessage , postSchema);

export default PostMessage;