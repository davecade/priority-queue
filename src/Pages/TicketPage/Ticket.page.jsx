import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react'
import { connect } from 'react-redux'
import './Ticket.styles.scss'
import BugIcon from '../../components/BugIcon/BugIcon.component'
import { enableEditModal, enableAssignModal } from '../../Redux/modal/modal.actions'
import { updateTicket } from '../../Redux/tickets/ticket.actions'
import { dateTimeFormatter } from '../../JS_Utilities/_utilities'
import Loading from '../../components/Loading/Loading.component'
import { createStructuredSelector } from 'reselect'
import { selectTicketList, selectTicketLoading } from '../../Redux/tickets/ticket.selectors'
import { selectUserList } from '../../Redux/users/user.selectors'


const ticketResolvedMessage = () => {
    alert("Ticket is already resolved. Please Re-Open to make changes.")
}


const Ticket = ({loading, ticketId, ticketList, enableEditModal, enableAssignModal, updateTicket, userList}) => {
    const [ selectedTicket, setSelectedTicket ] = useState('')
    const [ statusColor, setStatusColor ] = useState("")
    const [ textColor, setTextColor ] = useState("")
    const [ priorityColor, setPriorityColor ] = useState("")
    const [ fontWeight, setFontWeight ] = useState("")
    const [ display, setDisplay ] = useState("none")
    const [ commentValue, setCommentValue ] = useState(undefined)
    const [ commentUser, setCommentUser ] = useState("Anonymous")

    useLayoutEffect(() => {
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
    }, [selectedTicket])

    //-- Memoized, and only re-initializes when ticketID changes
    const findSelectedTicket = useCallback(id => {
        for(let ticket of ticketList) {
            if(ticket.id===id) {
                return ticket
            }
        }
    }, [ticketList])

    //-- useEffect runs only when the selectedTicket function re-initializes
    useEffect(() => {
        if(ticketList.length>0) {
            setSelectedTicket(findSelectedTicket(ticketId))
        }
    }, [findSelectedTicket, ticketList, ticketId])

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
            const newDate = new Date()

            let newComment = {
                user: commentUser,
                value: commentValue,
                date: newDate
            }

            let updatedTicket = {
                ...selectedTicket,
                lastUpdated: newDate,
                comments: [...selectedTicket.comments, newComment]
            }
            updateTicket(updatedTicket)
            setDisplay("none")
            setCommentValue("")
        }
    }

    const handleCancelComment =() => {
        setDisplay("none")
        setCommentValue("")
    }

    const handleResolvedReOpenClick = () => {

        let newTicket = {
            ...selectedTicket,
            status: selectedTicket.status==='resolved' ? 'in progress' : 'resolved',
            lastUpdated: new Date()
        }

        updateTicket(newTicket)
    }

    if((loading && ticketList.length===0) || (loading===false && ticketList.length===0)) {
        return (
            <div className="ticket-heading-container">
                <h1 className="ticket-heading">Loading Ticket</h1>
                <Loading heading={"Loading Tickets"} />
            </div>
        )
    } else {

        try {
            return (
                <div className="ticket-page" style={{
                    textDecorationLine: selectedTicket.status==='resolved' ? "line-through" : "",
                    textDecorationColor: "white",
                    textDecorationThickness: "2px"
                }}>
                    
                    <div className="bug-ticket-edit">
                        <div className="ticket-reference-container">
                            <BugIcon />
                            <h2 className="ticket-reference">PRQ-{selectedTicket.id}</h2>
                        </div>
                        <div className="last-updated">
                            <h4>Last Updated:</h4>
                        <p>{dateTimeFormatter(selectedTicket.lastUpdated)}</p>
                    </div>
                    </div>
                    
                    <div className="issue">
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

                        <div>
                            <button id="resolve-reopen-btn" onClick={handleResolvedReOpenClick}>
                                {selectedTicket.status==="resolved" ? "Re-Open" : "Resolve"}
                            </button>
                        </div>
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
                                fontWeight: fontWeight,
            
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
                        <h4>Created on:</h4>
                        <p>{dateTimeFormatter(selectedTicket.dateCreated)}</p>
                    </div>
    
                    <div className="comments-container">
                        <h4>Comments:</h4>
                        <ul className="comments-list">
                            {
                                selectedTicket.comments.length > 0 ?
                                selectedTicket.comments.map( (comment, index) => (
                                    <li key={index} className="comment-block">
                                        <p className="comment-date">Added by <span className="comment-user">{comment.user}</span> · {dateTimeFormatter(comment.date)}</p>
                                        <p className="comment-text"> {comment.value}</p>
                                    </li>
                                ))
                                :
                                <p>No comments to show</p>
                            }
                        </ul>
                    </div>
    
                    <div className="add-comment-section">
                        <textarea className="comment-text" value={commentValue} onChange={handleCommentChange} rows="5" cols="50" style={{
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
                                        userList.map((user, index) => (
                                            <option key={index} value={user}>{user}</option>
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
                <div className="ticket-heading-container">
                    <h1 className="ticket-heading">Ticket Not Found</h1>
                </div>
            )
        }

    }



}

const mapStateToProps = createStructuredSelector({
    ticketList: selectTicketList,
    userList: selectUserList,
    loading: selectTicketLoading
})

const mapDispatchToProps = dispatch => ({
    enableEditModal: selectedTicket => dispatch(enableEditModal(selectedTicket)),
    enableAssignModal: selectedTicket => dispatch(enableAssignModal(selectedTicket)),
    updateTicket: selectedTicket => dispatch(updateTicket(selectedTicket))
})

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Ticket))