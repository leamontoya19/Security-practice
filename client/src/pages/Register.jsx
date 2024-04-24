import { useForm } from 'react-hook-form'; //esta depe ayuda y facilita el uso de hooks
import { useAuth } from '../context/AuthContext';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

function Register() {
  const {register,handleSubmit} = useForm();
  const { signup, user } = useAuth();
  console.log(user)
  
  const onSubmit = handleSubmit(async (values) =>{
    signup(values);
    });

  return (
    <div className='auth'>
      <form 
      onSubmit={onSubmit}>

        <input 
        type="text" 
        placeholder='Username' 
        name='username'
        {...register('username', { required:true })} 
        />

        <input 
        type="email" 
        placeholder='Email' 
        name='email'
        {...register('email', { required:true })} 
        />

        <input 
        type="password" 
        placeholder='Password' 
        name='password'
        {...register('password', { required:true })} 
        />

        <button 
        type='submit'>
          Register
        </button>

      </form> 
    </div>

  );
};

export default Register;

// const Register= () => {
//   //connecting with back: creating inputs
//   const [inputs, setInputs] = useState ({
//     username:"",
//     email:"",
//     password:"",
//   })

// // const [err, setError] = useState (null);

// // const navigate = useNavigate();

// const handleChange = (e) =>{
//   setInputs( (prev) => ({...prev, [e.target.name]: e.target.value}));
// };
// // console.log (inputs)

// //SETTING THE ENDPOINT

// const handleSubmit= async(e) => {
//   e.preventDefault();
//   try{
//     const res = await axios.post("/auth/register", inputs);
//     // navigate("/login");
//     console.log(res)
//   } catch (err){
//     console.log(err)
//   // setError(err.response.data);
//   }
// }

//   return (
//     <div className='auth'>
//       <h1>Register</h1>
//       <form>
//         <input 
//         required type='text' 
//         placeholder='username' 
//         name='username' 
//         onChange={handleChange}
//         />
//         <input 
//         required 
//         type='email' 
//         placeholder='e-mail' 
//         name='email' 
//         onChange={handleChange}
//         />
//         <input 
//         required 
//         type='password' 
//         placeholder='password' 
//         name='password' 
//         onChange={handleChange}
//         />
//         <button onClick={handleSubmit}>Register</button>
//         {/* {err && <p>{err} </p>} */}
//         <span>Already have an account? <Link to="/login">Login</Link>
//         </span>
//       </form>

//     </div>
//   )
// }

