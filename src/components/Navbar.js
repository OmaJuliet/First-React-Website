import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }


  // const [nav, setNav] = useState(false);

  // const showNav = () => {
  //   setNav(!nav);
  // };


  return (

    <nav className={toggle ? 'navbar expanded' : 'navbar'}>
      <h2 className='logo'>Company Name</h2>
      <div className='toggle-icon' onClick={handleToggle}>
        {toggle ? <p className="menu-close"><FaTimes /></p> : <FaBars />}
      </div>
      <ul className='links'>
        <Link to="/home" className="navbar-link"><li>Home</li></Link>
        <Link to="/about" className="navbar-link"><li>About</li></Link>
        <Link to="/features" className="navbar-link"><li>Features</li></Link>
        <Link to="/blogs" className="navbar-link"><li>Blogs</li></Link>
        <Link to="/login" className="navbar-link"><li>Logout</li></Link>
      </ul>

      <p className='links' id="btn">
        <span>Contact Us</span>
      </p>
    </nav>


    // <header className="bg-gray-100 flex justify-around items-center py-[25px] border-2 border-b-black ">
    //   <h1 className="font-bold text-blue-400 text-xl">Company</h1>

    //   <nav className="hidden md:flex gap-5 ">
    //     <a href="#" className="">
    //       Home
    //     </a>
    //     <a href="#" className="">
    //       About
    //     </a>
    //     <a href="#" className="">
    //       Features
    //     </a>
    //     <a href="#" className="">
    //       Blogs
    //     </a>
    //     <a className='' id="btn">
    //       <span>Contact Us</span>
    //     </a>
    //   </nav>


    //   {nav ? (
    //     <i
    //       className="fixed right-[30px] text-3xl z-50 md:hidden"
    //       aria-hidden="true"
    //       onClick={showNav}
    //     ><FaTimes /></i>
    //   ) : (
    //     <i
    //       className="text-3xl md:hidden"
    //       aria-hidden="true"
    //       onClick={showNav}
    //     ><FaBars  /></i>
    //   )}

    //   <nav
    //     className={`h-[100vh] fixed top-[0px] flex flex-col justify-around items-center w-full md:hidden bg-white z-40 duration-1000 ${nav ? "right-[0px]" : "right-[-100vw]"
    //       } `}
    //   >
    //     <a href="#" className="underline">
    //       Home
    //     </a>
    //     <a href="#" className="underline">
    //       About
    //     </a>
    //     <a href="#" className="underline">
    //       Features
    //     </a>
    //     <a href="#" className="underline">
    //       Blogs
    //     </a>
    //     <p className='links' id="btn">
    //       <span>Contact Us</span>
    //     </p>
    //   </nav>
    // </header>

  )
}

export default Navbar