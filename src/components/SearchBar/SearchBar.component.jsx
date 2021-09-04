import React from 'react'
import { connect } from 'react-redux'
import { updateSearchField } from '../../Redux/tickets/ticket.actions'
import { withRouter } from 'react-router-dom'
import { getRefsArray } from '../../JS_Utilities/_utilities'
import './SearchBar.styles.scss'
import { selectTicketList } from '../../Redux/tickets/ticket.selectors'
import { createStructuredSelector } from 'reselect'

const SearchBar = ({ updateSearchField, history, ticketList }) => {

    const handleOnChange = event => {
        updateSearchField(event.target.value)
    }

    const handleEnter = event => {
        if (event.key === 'Enter') {
            if(`${event.target.value.slice(0,3).toUpperCase()}-`==="PRQ-") {
                const refArray = getRefsArray(ticketList)
                const prq = event.target.value.slice(0,3).toUpperCase()
                const id = event.target.value.slice(4)

                if(refArray.includes(`${prq.toUpperCase()}-${id}`)) {
                    history.push(`/Ticket/${prq.toUpperCase()}-${id}`)
                } else {
                    history.push('/')
                }
            } else {
                history.push('/')
            }
        }
    }

    return (
        <div className="search-container" >
            <input onChange={handleOnChange} onKeyPress={handleEnter} type="text" className="search-bar" placeholder="Search..."/>
            <i onClick={() => history.push('/')} className="fas fa-search fa-search"></i>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    ticketList: selectTicketList,
})

const mapDispatchToProps = dispatch => ({
    updateSearchField: input => dispatch(updateSearchField(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBar))
