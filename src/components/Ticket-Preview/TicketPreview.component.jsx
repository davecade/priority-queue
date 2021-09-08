import React, { useState, useLayoutEffect, useMemo } from 'react'
import './TicketPreview.styles.scss'
import BugIcon from '../../components/BugIcon/BugIcon.component'
import { withRouter } from 'react-router'
import { dateTimeFormatter } from '../../JS_Utilities/_utilities'


const TicketPreview = ({ticket, history}) => {
    const { id, status, issue, priority, user, assigned, lastUpdated } = ticket
    const [ statusColor, setStatusColor ] = useState("")
    const [ textColor, setTextColor ] = useState("")
    const [ priorityColor, setPriorityColor ] = useState("")
    const [ fontWeight, setFontWeight ] = useState("")

    const lineThrough = useMemo(() => ({
        textDecorationLine: ticket.status==='resolved' ? "line-through" : "",
        textDecorationThickness: "2px",
        textDecorationColor: "white"
    }), [ticket])
    

    useLayoutEffect(() => {
        
        if(status==="new") {
            setStatusColor("greenyellow")
            setFontWeight("bold")

        } else if(status==="in progress") {
            setStatusColor("#1010ce")
            setTextColor("#f0f6fc")

        } else if(status==="resolved") {
            setStatusColor("gray")
            setFontWeight("bold")

        }
    
    
        if(priority === "low") {
            setPriorityColor("greenyellow")

        } else if (priority === "medium") {
            setPriorityColor("orange")

        } else if (priority === "high") {
            setPriorityColor("red")
        }

    }, [status, priority])

    return (
        <li style={lineThrough} className="ticket-preview" onClick={() => history.push(`/Ticket/PRQ-${ticket.id}`)}>
            <BugIcon />
            <div className="ticket-content">

                    <div className="status">
                        <p style={{
                            backgroundColor: statusColor,
                            color: textColor,
                            fontWeight: fontWeight
                        }}>
                            {status.toUpperCase()}
                        </p>
                    </div>
                    <div className="ticket-reference">
                        {`PRQ-${id}`}
                    </div>
                    <div className="issue">
                        {issue.length<60 ? issue : `${issue.slice(0, 59)}...`}
                    </div>
                    <div className="user">{`Created By: ${user}`}</div>

                    <div className="priority">
                        <i className="fas fa-circle"
                            style={{
                                color: priorityColor
                            }}></i>
                        <p>
                            {priority.toUpperCase()}
                        </p>
                    </div>
                    <div className="engineer">
                        <p>{`Assigned to: ${assigned}`}</p>
                    </div>
                    <div className="datetime">
                        <p>{`Last Updated: ${dateTimeFormatter(lastUpdated)}`}</p>
                    </div>

            </div>
        </li>
    )
}

export default React.memo(withRouter(TicketPreview))

