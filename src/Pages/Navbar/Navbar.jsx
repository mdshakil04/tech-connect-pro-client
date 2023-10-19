import { Link, NavLink } from "react-router-dom";
import logo2 from "../../assets/images/logo2.png";
import icon from "../../assets/images/icon.png";

// import { FaUser } from 'react-icons/fa';
// import { useContext } from "react";
// import { AuthContext } from "../../../Firebase/AuthProvider";

const Navbar = () => {
//   const {user, logOut} = useContext(AuthContext)
//   const handleSignOut = () =>{
//       logOut()
//         .then()
//         .catch()
//   }

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProducts">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
      <li>
        <NavLink to="/newProducts">New Products</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUS">About US</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-indigo-100 font-bold">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className=" flex items-center gap-2">
            <img className=" w-1/2 rounded-xl" src={logo2} alt="" />
            {/* <h2 className=" text-xl font-bold">TechConnectPro</h2> */}
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="">
          <div className=" ">
            <Link to='/login'><button className="btn">Login</button></Link>
            {/* {
              user && <p>{user.email}</p>
            } */}
          </div>
        </label>
        {/* {
            user ? 
            <button onClick={handleSignOut} className="btn">Sign Out</button>
            :
            <Link to='/login'>
            <button className="btn">Login</button>
            </Link>
        } */}
       
      </div>
    </div>
  );
};

export default Navbar;
