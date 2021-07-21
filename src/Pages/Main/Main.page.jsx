import React from 'react'
import './Main.styles.scss'
import TicketPreview from '../../components/Ticket-Preview/TicketPreview.component'
import { connect } from 'react-redux'

const MainPage = ({ tickets }) => {
    return (
        <div className="main-page">
            <h1>Tickets</h1>
            <ul className="ticket-list">
                {
                    tickets.map( ticket => {
                        return <TicketPreview key={ticket.id} ticket={ticket} />
                    })
                }

            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    tickets: state.tickets.tickets
})

export default connect(mapStateToProps)(MainPage)