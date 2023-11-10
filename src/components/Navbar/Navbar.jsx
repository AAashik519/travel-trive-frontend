import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const {user,userSignOut,isLoading }= useAuth()

     

    const handleSignOut= async ()=>{
        try {
           await userSignOut()  
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <div className="lg:w-[1200px]  mx-auto px-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            {/* //Mobile device  */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
              <NavLink to='/'  > Home</NavLink>
            </li>
            
            <li>
              <NavLink to='/about'> About</NavLink>
            </li>
            <li>
              <NavLink to='/booking'> My Booking</NavLink>
            </li>
            {user?.email ? (
           <div className="dropdown dropdown-end">
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
             <div className="w-10 rounded-full">
               <img src= "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
             </div>
           </label>
           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             
             <li><Link>{user.email}</Link></li>
             <li><Link onClick={handleSignOut}>Logout</Link></li>
           </ul>
         </div>
            ) : (
              <div className="flex">
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </div>
            )}
            </ul>

             {/* //Mobile device  */}


          </div>
          <a className=" normal-case text-2xl font-semibold">TravelTribe</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 flex  items-center">

            <li>
              <NavLink to='/'  > Home</NavLink>
            </li>
            
            <li>
              <NavLink to='/about'> About</NavLink>
            </li>
            <li>
              <NavLink to='/booking'> My Booking</NavLink>
            </li>
            {user?.email ? (
           <div className="dropdown dropdown-end">
           <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
             <div className="w-10 rounded-full">
               <img src= "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
             </div>
           </label>
           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             
             <li><Link>{user.email}</Link></li>
             <li><Link onClick={handleSignOut}>Logout</Link></li>
           </ul>
         </div>
            ) : (
              <div className="flex">
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </div>
            )}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
