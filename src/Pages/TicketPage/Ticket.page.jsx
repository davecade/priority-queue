import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './Ticket.styles.scss'
import BugIcon from '../../components/BugIcon/BugIcon.component'
import { enableEditModal, enableAssignModal } from '../../Redux/modal/modal.actions'
import { updateTicket } from '../../Redux/tickets/ticket.actions'

const Ticket = ({ticketId, ticketList, enableEditModal, enableAssignModal, updateTicket}) => {
    const [ selectedTicket, setSelectedTicket ] = useState('')
    const [ statusColor, setStatusColor ] = useState("")
    const [ textColor, setTextColor ] = useState("")
    const [ priorityColor, setPriorityColor ] = useState("")
    const [ fontWeight, setFontWeight ] = useState("")
    const [ display, setDisplay ] = useState("none")
    const [ commentValue, setCommentValue ] = useState(undefined)

    useEffect(() => {
        try {
            if(selectedTicket.status==="new") {
                setStatusColor("greenyellow")
                setTextColor("black")
                setFontWeight("bold")
    
            } else if(selectedTicket.status==="in progress") {
                setStatusColor("#1010ce")
                setTextColor("#f0f6fc")
    
            } else if(selectedTicket.status==="resolved") {
                setStatusColor("#5f46ec")
                setFontWeight("bold")
                setTextColor("black")
            }
        
            if(selectedTicket.priority === "low") {
                setPriorityColor("greenyellow")
    
            } else if (selectedTicket.priority === "medium") {
                setPriorityColor("orange")
    
            } else if (selectedTicket.priority === "high") {
                setPriorityColor("red")
            }
        } catch(error) {}

    }, [selectedTicket])

    useEffect(() => {
        let objTickets = {...ticketList}
        if(ticketList.length>0) {
            setSelectedTicket(objTickets[ticketId-1])
        }
    }, [ticketList, ticketId])

    const handleCommentClick = () => {

        if(display==="none") {
            setDisplay("block")
            setCommentValue(undefined)
        } else {
            setDisplay("none")
            setCommentValue("")
        }
    }

    const handleCancelComment = () => {
        setDisplay("none")
        setCommentValue("")
    }

    const handleResolvedReOpenClick = () => {

        let newTicket = {
            ...selectedTicket,
            status: selectedTicket.status==='resolved' ? 'in progress' : 'resolved'
        }

        updateTicket(newTicket)
    }

    try {
        return (
            <div className="ticket-page">
                
                <div className="bug-ticket-edit">
                    <div>
                        <BugIcon />
                        <h2 className="ticket-reference">PRQ-{selectedTicket.id}</h2>
                    </div>
                </div>
                
                <div className="issue" style={{
                    textDecoration: selectedTicket.status==='resolved' ? "line-through" : ""
                }}>
                    <h2>{selectedTicket.issue}</h2>
                </div>
                
                
                <div className="ticket-buttons">
                    <button
                        className="edit-btn"
                        onClick={selectedTicket.status==='resolved' ? null : () => enableEditModal(selectedTicket)}>
                        Modify
                    </button>

                    <button className="assign-btn" onClick={selectedTicket.status==='resolved' ? null : () => enableAssignModal(selectedTicket)}>
                        Assign
                    </button>

                    <button className="resolve-reopen-btn" onClick={handleResolvedReOpenClick}>
                        {selectedTicket.status==='resolved' ? "Re-Open" : "Resolve"}
                    </button>
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

                    <div className="user">
                        <h4>Created By:</h4>
                        <div>{selectedTicket.user}</div>
                    </div>

                    <div className="assigned-to">
                        <h4>Assigned to:</h4>
                        <div>{selectedTicket.assigned}</div>
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

                


                <div className="description">
                    <h4>Description: </h4>
                    <p>{selectedTicket.description}</p>
                </div>

                <div className="date">
                    <h4>Last updated:</h4>
                    <p>{selectedTicket.date}</p>
                </div>

                <div className="comments-container">
                    <h4>Comments:</h4>
                    <p>No comments to show</p>
                </div>

                <div className="add-comment-section">
                    <textarea className="comment-text" value={commentValue}  rows="5" cols="50" style={{
                        display: display
                    }} />
                    <button onClick={selectedTicket.status==='resolved' ? null : handleCommentClick}>{display==="none" ? "Comment" : "Submit"}</button>
                    <button onClick={handleCancelComment} style={{
                        visibility: display==='none' ? 'hidden' : 'visible'
                    }}>Cancel</button>
                </div>
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
    ticketList: state.tickets.ticketList,
})

const mapDispatchToProps = dispatch => ({
    enableEditModal: selectedTicket => dispatch(enableEditModal(selectedTicket)),
    enableAssignModal: selectedTicket => dispatch(enableAssignModal(selectedTicket)),
    updateTicket: selectedTicket => dispatch(updateTicket(selectedTicket))
})

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)