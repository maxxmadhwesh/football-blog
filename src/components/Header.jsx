import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">MyBlog</div>
        <nav className="nav-links">
          <a href="#blogs">All Blogs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header