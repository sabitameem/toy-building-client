import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import SocialButton from "../Shared/SocialButton";
import useTitle from "../hook/useTitle";


const Register = () => {
  
  useTitle('Register')
  const { createUser } = useContext(AuthContext);
  const navigate=useNavigate()
  const location =useLocation()
  console.log(location)
  const from =location.state?.from || "/"
  const [error,setError]=useState('')

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value; // Get the value of the photo input
    console.log(name, email, password, photoURL);
    createUser(email, password)
    
      
      .then((result) => {
        const user = result.user;
        
        console.log(user.displayName)
        console.log('created user', user);
        navigate(from,)
      })
      .catch(error => setError(error.toString()));
  };
  




  return (
    <div className="max-w-md mx-auto mt-10 p-6 mb-[100px] bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form onSubmit={handleSignUp}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            name='email'
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           required
            name="password"
            type="password"
            placeholder="Enter a strong password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
            Photo URL
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           
            name="photo"
            type="text"
            placeholder="Enter a URL for your profile photo"
          />
        </div>
        {error && <p className="text-red-500 mb-3">Error: {error}</p>}
        <div className="flex items-center justify-center">
          <button className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Register
          </button>
          
        </div>
      </form>

      <p className="text-center mt-4 font-semibold">Or</p>
      
      <div className="text-center">
       <SocialButton></SocialButton>
      </div>
      <div className="text-center">
          <p className="text-gray-600 mb-2">Already have an account?</p>
          <Link className="text-gray-500 font-semibold" to="/login">
          Login
          </Link>
        </div>
      
    </div>
  );
};

export default Register;
