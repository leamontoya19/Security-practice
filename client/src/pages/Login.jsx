import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';


function Login () {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const {signin, errors: signinErrors} =useAuth();
  
  const onSubmit = handleSubmit((data) =>{
    signin(data);
  })

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
