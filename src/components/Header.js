import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src="/images/logo.png" alt="logo" />
        <h1 className="company-name">Company Name</h1>
      </div>
      
      
        <nav className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/login">Login</Link>
        </nav>

    </header>
  );
}

export default Header;