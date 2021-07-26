import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './Ticket.styles.scss'

const Ticket = ({ticketId, ticketList}) => {
    const [ selectedTicket, setSelectedTicket ] = useState('')
    const [ statusColor, setStatusColor ] = useState("")
    const [ textColor, setTextColor ] = useState("")
    const [ priorityColor, setPriorityColor ] = useState("")
    const [ fontWeight, setFontWeight ] = useState("")

    useEffect(() => {
        if(selectedTicket.status==="new") {
            setStatusColor("greenyellow")
            setFontWeight("bold")

        } else if(selectedTicket.status==="in progress") {
            setStatusColor("#1010ce")
            setTextColor("#f0f6fc")

        } else if(selectedTicket.status==="resolved") {
            setStatusColor("#7197bd")
            setFontWeight("bold")
        }
    
        if(selectedTicket.priority === "low") {
            setPriorityColor("greenyellow")

        } else if (selectedTicket.priority === "medium") {
            setPriorityColor("orange")

        } else if (selectedTicket.priority === "high") {
            setPriorityColor("red")
        }
    }, [selectedTicket.status, selectedTicket.priority])

    useEffect(() => {
        let objTickets = {...ticketList}
        if(ticketList.length>0) {
            setSelectedTicket(objTickets[ticketId-1])
        }
    }, [ticketList])

    try {
        return (
            <div className="ticket-page">
                <h4 className="ticket-reference">PRQ-{selectedTicket.id}</h4>
                <h3>{selectedTicket.issue}</h3>
                <div className="ticket-buttons">

                </div>
                <div className="priority-status">
                    <div className="priority-container">
                        <h4>Priority:</h4>
                        <div className="priority">
                            <i className="fas fa-circle"
                                style={{
                                    color: priorityColor
                                }}></i>
                            <p>
                                {selectedTicket.priority.toUpperCase()}
                            </p>
                        </div>
                    </div>
                    
                    <div className="status">
                        <h4>Status:</h4>
                        <p style={{
                            backgroundColor: statusColor,
                            color: textColor,
                            fontWeight: fontWeight
                        }}>
                            {selectedTicket.status.toUpperCase()}
                        </p>
                    </div>
                </div>

                <div className="user-date">
                    
                    <div className="user">
                        <h4>Created By:</h4>
                        <div>{selectedTicket.user}</div>
                    </div>

                    
                </div>
                
                
                <div>{selectedTicket.assigned}</div>
                <div>{selectedTicket.description}</div>
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