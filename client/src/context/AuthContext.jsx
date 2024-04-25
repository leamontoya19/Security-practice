import { createContext, useContext, useState, useEffect } from "react";
import { loginReq, registerReq } from '../api/auth.js';


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
    const [user, setUser] = useState(null) //USUARIO GLOBAL: el usuario que podrá ser leido en toda la aplicación.
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

//En esta función signup es donde se reciben los datos del 
//usuario registrado, esta funcion recibe un user que recibe la petición que ya teniamos en Register.jsx, 
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

    const signin = async (user) => {
        try {
            const res = await loginReq(user);
            console.log(res) 
        }catch (error){
            setErrors(error.response.data);
        };
    };

    
    //Timer para limpiar mensaje de error
      useEffect(() => {
         if (errors.length > 0){
          const timer = setTimeout(() => {
                 setErrors([])
             }, 5000)
             return () => clearTimeout(timer)
         };

     }, [errors]);


    return (
        <AuthContext.Provider 
        value={{
            signup,
            signin,
            user,
            isAuthenticated,
            errors,
        }}
        >
            {children} 
            </AuthContext.Provider>
    );
};