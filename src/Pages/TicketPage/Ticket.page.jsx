import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Ticket = ({ticketId, ticketList}) => {
    const [ selectedTicket, setSelectedTicket ] = useState('')

    useEffect(() => {
        let objTickets = {...ticketList}
        if(ticketList.length>0) {
            setSelectedTicket(objTickets[ticketId-1])
        }
    }, [ticketList])

    try {
        return (
            <div>
                <div>{selectedTicket.issue}</div>
                <div>{selectedTicket.description}</div>
                <div>{selectedTicket.user}</div>
                <div>{selectedTicket.status}</div>
                <div>{selectedTicket.priority}</div>
                <div>{selectedTicket.date}</div>
                <div>{selectedTicket.assigned}</div>
                <div>{selectedTicket.id}</div>
            </div>
        )
    } catch(error) {
        return(
            <div>
                <h1>No ticket found</h1>
            </div>
        )

    }

}

const mapStateToProps = state => ({
    ticketList: state.tickets.ticketList
})

export default connect(mapStateToProps)(Ticket)