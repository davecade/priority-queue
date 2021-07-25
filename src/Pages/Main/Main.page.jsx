import React from 'react'
import './Main.styles.scss'
import TicketPreview from '../../components/Ticket-Preview/TicketPreview.component'
import { connect } from 'react-redux'

const MainPage = ({ ticketList }) => {
    return (
        <div className="main-page">
            <h1>Tickets</h1>
            <ul className="ticket-list">
                {
                    ticketList.map( ticket => (
                        <TicketPreview key={ticket.id} ticket={ticket} />
                    ))
                }

            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    ticketList: state.tickets.ticketList
})

export default connect(mapStateToProps)(MainPage)