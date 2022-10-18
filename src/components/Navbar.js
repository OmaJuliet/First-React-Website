import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

//Imports for Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

  // function for authentication
  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      toast("You've been logged out")
    } catch (e) {
      toast(e.message);
    }
  };


  return (
    <>
      <nav className={toggle ? 'navbar expanded' : 'navbar'}>
        <img src={logo} className="logo" alt="logo" />
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle ? <p className="menu-close"><FaTimes /></p> : <FaBars />}
        </div>
        <ul className='links'>
          <Link to="/home" className="navbar-link"><li>Home</li></Link>
          <Link to="/about" className="navbar-link"><li>About</li></Link>
          <Link to="/blogs" className="navbar-link"><li>Blogs</li></Link>
          <Link to="/login" onClick={handleLogout} className="navbar-link"><li>Logout</li></Link>
        </ul>

        <p className='links' id="btn">
          <span>Contact Us</span>
        </p>
      </nav>

      <ToastContainer />
    </>


  )
}

export default Navbar