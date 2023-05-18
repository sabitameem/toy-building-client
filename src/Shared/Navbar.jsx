import { Link } from "react-router-dom";
import logo from '../../public/logo.avif'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
   const {user,logOut}= useContext(AuthContext)
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
      <img className="w-12 h-12" src={logo} alt="" />
        <Link to="/" className="normal-case text-2xl font-semibold">
          Toy Building
        </Link>
      </div>
      <div className="flex-none">
        
          <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/allToys">All Toys</Link>
            <Link to="/addAToys">Add a Toys</Link>
            <Link to="/myToys">My Toys</Link>
            <Link to="/blog">Blog</Link>
          </ul>
          </div>
   
   { user?
       <>
         <div className="dropdown dropdown-end lg:block hidden mr-3">
         <Link className="font-semibold mr-4" to="/">Home</Link>
          <Link className="font-semibold mr-4" to="/allToys">All Toys</Link>
          <Link className="font-semibold mr-4" to="/addAToys">Add a Toys</Link>
          <Link className="font-semibold mr-4" to="/myToys">My Toys</Link>
          <Link className="font-semibold mr-4" to="/blog">Blog</Link>
          <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
          
        </div>
        <div className="dropdown dropdown-end">
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full btn btn-ghost btn-circle avatar">
              <img src='' />
            </div>
          </label> 
        </div>
        
    </>
        :
        <>
        <Link className="font-semibold mr-4" to="/">Home</Link> 
       <Link to='/login'><button className="btn btn-ghost mr-3 font-bold">LogIn</button></Link>
        </>
}


      </div>
    </div>
  );
};

export default Navbar;
