import React from 'react'
import { connect } from 'react-redux'
import { updateSearchField } from '../../Redux/tickets/ticket.actions'
import './SearchBar.styles.scss'

const SearchBar = ({ updateSearchField }) => {

    const handleOnChange = event => {
        updateSearchField(event.target.value)
    }

    return (
        <div className="search-container" >
            <input onChange={handleOnChange} type="text" className="search-bar" placeholder="Search..."/>
            <i className="fas fa-search fa-search"></i>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateSearchField: input => dispatch(updateSearchField(input))
})

export default connect(null, mapDispatchToProps)(SearchBar)
