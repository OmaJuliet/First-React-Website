import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
  }



  return (

    <nav className={toggle?'navbar expanded':'navbar'}>
        <h2 className='logo'>Company Name</h2>
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle?<p className="menu-close">X</p>:<FaBars />}
        </div>
        <ul className='links'>
          <a href="#" id="active"><li>Home</li></a>
          <a href="#about" className="navbar-link"><li>About</li></a>
          <a href="#features" className="navbar-link"><li>Features</li></a>
          <a href="#blogs" className="navbar-link"><li>Blogs</li></a>
        </ul>

        <a href="#contact" className='links' id="btn">
          <span>Contact Us</span>
        </a>
    </nav>

  )
}

export default Navbar