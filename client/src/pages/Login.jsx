import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useState } from 'react';



function Login () {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const {signin, errors: signinErrors, isAuthenticated} =useAuth();
  const [isRecaptchaCompleted, setRecaptchaCompleted] =useState(false);
  const navigate = useNavigate();
  
  const onChangeRecaptcha = () => { 
    setRecaptchaCompleted(true);
  };
  const onSubmit = handleSubmit((data) =>{
    if (isRecaptchaCompleted) {
    signin(data);
    }else{
      
      alert("Please, complete the ReCAPTCHA");
    }
  });

  //Navegación una vez inicia sesión
  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated])


  return (
    <div className='auth'>

      <h1>Login</h1>

       {signinErrors.map((error, i) => (
          <div className='errors' key={i}>
            {error}
          </div>
        ))} 

      <form 
      onSubmit={onSubmit}>
        <input 
        type="email" 
        placeholder='Email' 
        name='email'
        {...register('email', { required:true })} 
        />
        {errors.email && (<p> Email is required</p>)}

        <input 
        type="password" 
        placeholder='Password' 
        name='password'
        {...register('password', { required:true })} 
        />
        {errors.password && (<p> Password is required</p>)}
        
        <ReCAPTCHA 
        sitekey="6LdUdcopAAAAAGO0fRbxm7SuwdoksZom5ySfKizD"
        onChange={onChangeRecaptcha}
        /> 

        <button 
        type='submit'>
          Login
        </button>

      </form> 
      <p>Not signed up yet? 
        <Link to="/register">Join us</Link>
      </p>
    </div>
  );
};

export default Login
