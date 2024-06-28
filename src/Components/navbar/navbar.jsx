import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [mobileMenu,setMobileMenu]=useState(false)
    const toggleMenu=()=>{
      mobileMenu? setMobileMenu(false):setMobileMenu(true);
    }

  return (
    <nav className='container'>
      <img src={logo} alt="logo" className='logo' />
      
    </nav>
  );
};

export default Navbar;
