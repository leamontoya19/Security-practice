import { createContext, useContext, useState } from "react";
import { registerReq } from '../api/auth.js';


export const AuthContext = createContext();

//esta funcion es para que en lugar de import usecontext y Authcontext uso useAuth
export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) //este es el usuario que podrá ser leido en toda la aplicación
    
//En esta función signup es donde se reciben los datos del 
//usuario registrado, esta funcion recibe un user que recibe la pedición que ya teniamos en Register.jsx, 
//corto y pego
    const signup = async (user) => {
        const res = await registerReq(user);
        console.log(res.data);
        setUser(res.data)

    }


    return (
        <AuthContext.Provider 
        value={{
            signup,
            user,
        }}
        >
            {children} 
            </AuthContext.Provider>
    );
};