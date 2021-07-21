import React from 'react'
import './navbar.styles.scss'
import SearchBar from '../SearchBar/SearchBar.component'
import Button from '../Button/Button.component'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <i className="fas fa-home"></i>
                <SearchBar />
            </div>
            <div className="right">
                <Button text={"Create +"} />
            </div>
        </nav>
    )
}

export default Navbar