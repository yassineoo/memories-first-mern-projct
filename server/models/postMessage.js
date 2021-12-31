import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    name : String ,
    creator :String , 
    tags: [String],
    selectedFile : String ,
    likeCount :{
        type : Number,
        default : 0
    } 
    ,
    likes : [String],
    createdAt: {
        type : Date , 
        default : new Date(),
    }

}
)

const PostMessage = mongoose.model("postMessage" , postSchema);

export default PostMessage;