import React from 'react'
import './navbar.styles.scss'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="search-container">
                <input type="search" className="search-bar" placeholder="Search..."/>
            </div>
        </nav>
    )
}

export default Navbar
