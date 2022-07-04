import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id='Navbar'>
      <div className='navbar themed'>
        <Link to='/' className='navbar-link themed btn'>
          Home
        </Link>
        <Link to='/Projects' className='navbar-link themed btn'>
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;