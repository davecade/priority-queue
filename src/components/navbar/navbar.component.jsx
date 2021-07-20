import React from 'react'
import './navbar.styles.scss'
import SearchBar from '../SearchBar/SearchBar.component'
import Button from '../Button/Button.component'
import Icon from '../Icon/Icon.component'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <Icon iconClass={"fas fa-bug"} backgroundColor={'#f0f6fc'} color={'black'} />
                <SearchBar />
            </div>
            <div className="right">
                <Button text={"Create +"} />
            </div>
        </nav>
    )
}

export default Navbar