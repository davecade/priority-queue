import React from 'react'
import './Main.styles.scss'
import TicketPreview from '../../components/Ticket-Preview/TicketPreview.component'
import { connect } from 'react-redux'

const MainPage = ({ ticketList, searchField }) => {

    let searchString = ''
    let filteredTickets = ticketList.filter(ticket => {
        searchString = `${ticket.issue} ${ticket.description} ${ticket.user} ${ticket.assigned} PRQ-${ticket.id}`
        return searchString.toLowerCase().includes(searchField.toLowerCase())
    })
    
    return (
        <div className="main-page">
            <h1>Tickets</h1>
            <ul className="ticket-list">
                {
                    filteredTickets.map( ticket => (
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