import React from 'react'
import './SearchBar.styles.scss'

const SearchBar = () => {
    return (
        <div className="search-container">
            <input type="search" className="search-bar" placeholder="Search..."/>
        </div>
    )
}

export default SearchBar
