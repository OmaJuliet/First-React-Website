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
          <p id="active"><li>Home</li></p>
          <p className="navbar-link"><li>About</li></p>
          <p className="navbar-link"><li>Features</li></p>
          <p className="navbar-link"><li>Blogs</li></p>
        </ul>

        <p className='links' id="btn">
          <span>Contact Us</span>
        </p>
    </nav>

  )
}

export default Navbar