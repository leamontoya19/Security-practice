import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image:{
        type: String,//este tipo de dato es String porque va a almacenar la URL de la imagen
        required: false 
    },
    //fecha creación post
    date:{
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    }
    
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Post", postSchema);