import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true
        //trim es para que no tome en cuenta los espacios, solo el username
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
        //unique como su nombre lo inica es para que sea único
    },
    password:{
        type: String,
        required: true
    } 
}, {
    timestamps: true
} //este último objeto es para que se guarden las fechas de creación de los usuarios
)

export default mongoose.model('User', userSchema)
//esto es porque cuando creamos el schema solo estamos definiendo lo que queremos consultar
//pero hay que tener métodos para poder interactuar con la db por eso tenemos 'User' que es una
//colección de usuarios.
