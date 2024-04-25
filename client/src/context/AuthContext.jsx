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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

//En esta función signup es donde se reciben los datos del 
//usuario registrado, esta funcion recibe un user que recibe la pedición que ya teniamos en Register.jsx, 
//corto y pego
    const signup = async (user) => {
        try {
            const res = await registerReq(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        }catch (error){
            console.log(error.response)
            setErrors(error.response.data);
        };
    };


    return (
        <AuthContext.Provider 
        value={{
            signup,
            user,
            isAuthenticated,
            errors,
        }}
        >
            {children} 
            </AuthContext.Provider>
    );
};