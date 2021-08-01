import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './Ticket.styles.scss'
import BugIcon from '../../components/BugIcon/BugIcon.component'
import { enableEditModal, enableAssignModal } from '../../Redux/modal/modal.actions'
import { updateTicket } from '../../Redux/tickets/ticket.actions'


const Ticket = ({ticketId, ticketList, enableEditModal, enableAssignModal, updateTicket, userList}) => {
    const [ selectedTicket, setSelectedTicket ] = useState('')
    const [ statusColor, setStatusColor ] = useState("")
    const [ textColor, setTextColor ] = useState("")
    const [ priorityColor, setPriorityColor ] = useState("")
    const [ fontWeight, setFontWeight ] = useState("")
    const [ display, setDisplay ] = useState("none")
    const [ commentValue, setCommentValue ] = useState(undefined)
    const [ commentUser, setCommentUser ] = useState("Anonymous")

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
                setStatusColor("gray")
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

    const handleCommentChange = event => {
        setCommentValue(event.target.value)
    }

    const handleCommentUserChange = event => {
        setCommentUser(event.target.value)
    }

    const handleCommentClick = () => {

        if(display==="none") {
            setDisplay("block")
            setCommentValue(undefined)
        } else {

            const currentDate = new Date()
            const day = currentDate.getDate()
            const month = currentDate.getMonth()
            const year = currentDate.getFullYear()
            const hour = currentDate.getHours()
            const minute = currentDate.getMinutes()
    
            const z = num => num<10 ? `0${num}` : num
            const y = num => num.toString().slice(2)

            let newComment = {
                user: commentUser,
                value: commentValue,
                date: `${z(day)}/${z(month)}/${y(year)} - ${z(hour)}:${z(minute)}`
            }

            let updatedTicket = {
                ...selectedTicket,
                comments: [...selectedTicket.comments, newComment]
            }
            updateTicket(updatedTicket)
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

    const ticketResolvedMessage = () => {
        alert("Ticket is already resolved. Please Re-Open to make changes.")
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
                        onClick={selectedTicket.status==='resolved' ? ticketResolvedMessage : () => enableEditModal(selectedTicket)}>
                        Modify
                    </button>

                    <button className="assign-btn" onClick={selectedTicket.status==='resolved' ? ticketResolvedMessage : () => enableAssignModal(selectedTicket)}>
                        Assign Tech
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

                    <div className="assigned-to">
                        <h4>Tech Assigned:</h4>
                        <div>{selectedTicket.assigned}</div>
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
                    <ul className="comments-list">
                        {
                            selectedTicket.comments.length > 0 ?
                            selectedTicket.comments.map( comment => (
                                <li className="comment-block">
                                    <p className="comment-date">Added by <span className="comment-user">{comment.user}</span> · {comment.date}</p>
                                    <p className="comment-text"> {comment.value}</p>
                                </li>
                            ))
                            :
                            <p>No comments to show</p>
                        }
                    </ul>
                </div>

                <div className="add-comment-section">
                    <textarea className="comment-text" value={commentValue} onChange={handleCommentChange}  rows="5" cols="50" style={{
                        display: display
                    }} />
                    <div className="comment-input">
                        <div className="comment-input-buttons">
                            <button className="comment-button" onClick={selectedTicket.status==='resolved' ? ticketResolvedMessage : handleCommentClick}>{display==="none" ? "Comment" : "Submit"}</button>
                            <button onClick={handleCancelComment} style={{
                                visibility: display==='none' ? 'hidden' : 'visible'
                            }}>Cancel</button>
                        </div>
                        <div className="select-user-to-comment">
                            <p style={{visibility: display==='none' ? 'hidden' : 'visible'}} >Comment by:</p>
                            <select value={commentUser} onChange={handleCommentUserChange} style={{visibility: display==='none' ? 'hidden' : 'visible'}} >
                                <option value="Anonymous">Anonymous</option>
                                {
                                    userList.map(user => (
                                        <option value={user}>{user}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <div className="footer">

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
    userList: state.users.userList
})

const mapDispatchToProps = dispatch => ({
    enableEditModal: selectedTicket => dispatch(enableEditModal(selectedTicket)),
    enableAssignModal: selectedTicket => dispatch(enableAssignModal(selectedTicket)),
    updateTicket: selectedTicket => dispatch(updateTicket(selectedTicket))
})

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)