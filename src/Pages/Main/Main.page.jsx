import React, { useState } from 'react'
import './Main.styles.scss'
import TicketPreview from '../../components/Ticket-Preview/TicketPreview.component'
import { connect } from 'react-redux'
import { quickSort } from '../../JS_Utilities/_utilities'

const MainPage = ({ ticketList, searchField }) => {
    const [ sortBy, setSortBy ] = useState("id")
    let filteredTickets = ticketList.filter(ticket => {
        let searchString = `${ticket.issue} ${ticket.description} ${ticket.user} ${ticket.assigned} PRQ-${ticket.id}`
        return searchString.toLowerCase().includes(searchField.toLowerCase())
    })

    let sortedTickets = quickSort(filteredTickets, sortBy)

    const handleSortBy = event => {
        setSortBy(event.target.value)
    }
    
    return (
        <div className="main-page">
            <h1 className="mainpage-heading">{filteredTickets.length===0 ? "No Tickets Found" : "Tickets"}</h1>
            <div className="sort-by" style={{
                visibility: filteredTickets.length===0? "hidden" : "visible"
            }} >
                <span className="sortby-label">Sort By: </span>
                <select onChange={handleSortBy}>
                    <option value="id">Date Created</option>
                    <option value="lastUpdated">Last Updated</option>
                    <option value="status">Status</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <ul className="ticket-list">
                {   
                    (sortBy==='id'?filteredTickets:sortedTickets).map( ticket => (
                        <TicketPreview key={ticket.id} ticket={ticket} />
                    ))
                }

            </ul>

            <div className="footer">

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    ticketList: state.tickets.ticketList,
    searchField: state.tickets.searchField
})

export default connect(mapStateToProps)(MainPage)