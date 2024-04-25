import { useForm } from 'react-hook-form'; //esta depe ayuda y facilita el uso de hooks
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const {register,handleSubmit, formState:{errors},} = useForm();
  const { signup, isAuthenticated, errors: registerErrors} = useAuth();
  const navigate = useNavigate()

  useEffect(() =>{
    if (isAuthenticated) navigate('/')
  }, [isAuthenticated]);
  
  const onSubmit = handleSubmit(async (values) =>{
    signup(values);
    });

  return (
    <div className='auth'>
      <h1>Register</h1>
    {/* Configuración del mensaje de error que se muestra(registererror) */}
      {
        registerErrors.map((error, i) => (
          <div className='errors' key={i}>
            {error}
          </div>
        ))
      }
      <form 
      onSubmit={onSubmit}>

        <input 
        type="text" 
        placeholder='Username' 
        name='username'
        {...register('username', { required:true })} 
        />
        {errors.username && (
        <p> Username is required</p>
        )}

        <input 
        type="email" 
        placeholder='Email' 
        name='email'
        {...register('email', { required:true })} 
        />
        {errors.email && (
        <p> Email is required</p>
        )}

        <input 
        type="password" 
        placeholder='Password' 
        name='password'
        {...register('password', { required:true })} 
        />
        {errors.password && (
          <p> Password is required</p>
          )}

        <button 
        type='submit'>
          Register
        </button>

      </form> 
    </div>

  );
};

export default Register;
