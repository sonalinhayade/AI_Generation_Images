import mongoose from "mongoose";

var Post = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    prompt:{
        type:String,
        required:true,
    },

    photo:{
        type:String,
        required:true,
    },
    
});

//Export the model

const PostSchema = mongoose.model('Post',Post);
export default PostSchema;