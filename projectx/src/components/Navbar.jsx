import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/dashboard" className="logo">
          <Leaf size={28} color="var(--primary-color)" />
          NutriVital
        </Link>
        <ul className="nav-links">
          <li><Link to="/dashboard" className="nav-link">Recipes</Link></li>
          <li><Link to="/login" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Log In</Link></li>
          <li><Link to="/signup" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
