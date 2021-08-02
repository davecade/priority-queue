import React from 'react'
import { connect } from 'react-redux'
import { updateSearchField } from '../../Redux/tickets/ticket.actions'
import { withRouter } from 'react-router-dom'
import './SearchBar.styles.scss'

const SearchBar = ({ updateSearchField, history }) => {

    const handleOnChange = event => {
        updateSearchField(event.target.value)
    }

    const handleEnter = event => {
        if (event.key === 'Enter') {
            history.push('/')
        }
    }

    return (
        <div className="search-container" >
            <input onChange={handleOnChange} onKeyPress={handleEnter} type="text" className="search-bar" placeholder="Search..."/>
            <i onClick={() => history.push('/')} className="fas fa-search fa-search"></i>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    updateSearchField: input => dispatch(updateSearchField(input))
})

export default connect(null, mapDispatchToProps)(withRouter(SearchBar))
