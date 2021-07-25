import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Ticket = ({ticketId, ticketList}) => {
    const [ selectedTicket, setSelectedTicket ] = useState('')

    useEffect(() => {
        ticketList.forEach(ticket => {
            if(ticket.id === ticketId) {
                setSelectedTicket(ticket)
                return;
            }
        })
    })

    return (
        <div>
            <p>{selectedTicket.issue}</p>
            <p>{selectedTicket.description}</p>
            <p>{selectedTicket.user}</p>
            <p>{selectedTicket.status}</p>
            <p>{selectedTicket.priority}</p>
            <p>{selectedTicket.date}</p>
            <p>{selectedTicket.assigned}</p>
            <p>{selectedTicket.id}</p>
        </div>
        
    )
}

const mapStateToProps = state => ({
    ticketList: state.tickets.ticketList
})

export default connect(mapStateToProps)(Ticket)