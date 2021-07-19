import React from 'react'
import './navbar.styles.scss'
import SearchBar from '../SearchBar/SearchBar.component'

const Navbar = () => {
    return (
        <nav className="navbar">
            <SearchBar />
            <div className="add-container">
                <button className="btn">
                    Create +
                </button>
            </div>
        </nav>
    )
}

export default Navbar