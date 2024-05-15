import React from 'react'
import "./Navbar.css";

const NavBar = () => {
  return (
    <header className="navbar__Navbar">
        <h1>NutriConecta</h1>
        <div className="input">
            <input type="text" name="search-box" placeholder="Search" />
        </div>
    </header>
  )
}

export default NavBar