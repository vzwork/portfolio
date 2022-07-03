import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id='Navbar'>
      <div className='navbar'>
        <Link to='/' className='navbar-link btn'>
          Home
        </Link>
        <Link to='/Projects' className='navbar-link btn'>
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;