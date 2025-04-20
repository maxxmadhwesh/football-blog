import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">MyBlog</div>
        <nav className="nav-links">
          <a href="#shorts">Sh⚽️rts</a>
          <a href="#Analysis">Analysis</a>
          <a href="#contact">Contact me</a>
        </nav>
      </div>
    </header>
  )
}

export default Header