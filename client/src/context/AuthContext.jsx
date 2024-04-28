import { createContext, useContext, useState, useEffect } from "react";
import { loginReq, registerReq, verifyTokenReq} from '../api/auth.js';
import Cookies from 'js-cookie';

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
     const [loading, setLoading] = useState(true); //lo ponemos en true para que siempre esté cargando

    //usuario registrado
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

   //Inicia sesión el usuario
    const signin = async (user) => {
        try {
            const res = await loginReq(user);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        }catch (error){
             console.log(error);
              if (Array.isArray(error.response.data)){
                  return setErrors(error.response.data)
              }
              setErrors(error.response.data.message);
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

    //rutas protegidas: consulta y verificación de token
    useEffect(() =>{
        async function checkLogin () {
          const cookies =  Cookies.get();
          
            if(!cookies.token) {
                 setIsAuthenticated(false);
                 setLoading(false);
                 return setUser(null);
                 
              }

             try {
                const res =  await verifyTokenReq(cookies.token);
                console.log(res)
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
               } catch (error) {
                console.log(error);
                setIsAuthenticated(false);
                setLoading(false);
                }
                

        }
        checkLogin()
    }, []);



    return (
        <AuthContext.Provider
        value={{
            signup,
            signin,
            loading,
            user,
            isAuthenticated,
            errors,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};