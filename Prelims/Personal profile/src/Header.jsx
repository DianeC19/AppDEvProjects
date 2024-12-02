import React from 'react';
import './Header.css'; // Optional CSS for navigation styles

const Header = () => {
  return (
    <header className="header">
      <h1>My Profile</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#gallery">Gallery</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;