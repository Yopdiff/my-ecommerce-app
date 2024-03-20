import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const logoStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px'
  };

  const companyNameStyle = {
    fontSize: '1.5em'
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px'
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src="../public/images/logo.png" alt="logo" style={logoStyle} />
        <h1 style={companyNameStyle}>Company Name</h1>
      </div>
      <nav style={navStyle}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/products" style={navLinkStyle}>Products</Link>
        <Link to="/login" style={navLinkStyle}>Login</Link>
      </nav>
    </header>
  );
}

export default Header;