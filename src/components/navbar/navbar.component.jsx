import React from 'react'
import './navbar.styles.scss'
import SearchBar from '../SearchBar/SearchBar.component'
import Button from '../Button/Button.component'

const Navbar = () => {
    return (
        <nav className="navbar">
            <SearchBar />
            <div className="add-container">
                <Button text={"Create +"} />
            </div>
        </nav>
    )
}

export default Navbar