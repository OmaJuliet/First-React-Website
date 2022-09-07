import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

// import {Icon} from 'react-icons-kit'
// import {menu} from 'react-icons-kit/feather/menu'
// import {x} from 'react-icons-kit/feather/x'


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

          {/* <a href="" id="btn">
            <span>Sign Up</span>
          </a> */}
        </ul>

        <a href="#contact" className='links' id="btn">
          <span>Contact Us</span>
        </a>
    </nav>

  // <body>
  //   <header className="header" data-header>
  //     <div className="container">
  //       <div className="overlay" data-overlay></div>

  //       <a href="#">
  //         <h1 className="logo">Company Name</h1>
  //       </a>

  //       <nav className="navbar" data-navbar>
  //         <div className="navbar-top">
  //           <a href="#" class="logo">Company Name</a>

  //           <button className="nav-close-btn" aria-label="close menu"> X </button>
  //         </div>
  //         <ul className="navbar-list">
  //           <li className="navbar-item">
  //             <a href="" class="navbar-link">Home</a>
  //           </li>
  //           <li className="navbar-item">
  //             <a href="" class="navbar-link">About</a>
  //           </li>
  //           <li className="navbar-item">
  //             <a href="" class="navbar-link">Features</a>
  //           </li>
  //           <li className="navbar-item">
  //             <a href="" class="navbar-link">Blogs</a>
  //           </li>
  //           <li className="navbar-item">
  //             <a href="" class="navbar-link">Contact</a>
  //           </li>
  //         </ul>
  //       </nav>

  //       <a href="" className="btn">
  //         <span>Sign Up</span>
  //       </a>

  //       <button className="nav-open-btn" aria-label="open menu"><FaBars /></button>
  //     </div>
  //   </header>
  //   </body>
  )
}

export default Navbar