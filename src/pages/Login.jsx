import { useContext, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

import SocialButton from "../Shared/SocialButton";
import useTitle from "../hook/useTitle";


const Login = () => {
  useTitle('Login')
  const {signIn}=useContext(AuthContext)
  const navigate =useNavigate()
  const location =useLocation()
  console.log(location)
  const from =location.state?.from || "/"
  const [error,setError]=useState('')
  
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from,)
        })
        .catch(error => setError(error.toString()));
}



  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            required
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="text-red-500 mb-3">Error: {error}</p>}
        <div className="flex items-center justify-between mb-4 mt-2">
          <button className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
          

          <SocialButton></SocialButton>
          {/* <div>
          <span className="mr-3">Sign In With</span>
      <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline btn-sm">G</button>
      <span>oogle</span>
          </div> */}




        </div>
        <div className="text-center">
          <p className="text-gray-600 mb-2">Do not have an account?</p>
          <Link className="text-purple-500 font-semibold" to="/register">Register here</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
