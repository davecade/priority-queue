import React from 'react'
import './TicketPreview.styles.scss'
import BugIcon from '../../components/BugIcon/BugIcon.component'

const TicketPreview = ({  }) => {
    return (
        <li className="ticket-preview">
            <BugIcon />
            <div className="ticket-content">
                <div className="left-summary">
                    <div className="status">
                        <p style={{backgroundColor: "greenyellow"}}>New</p>
                    </div>
                    <div className="issue">
                        Blue screen of death while in Arena! FIX IT!!
                    </div>
                    <div className="ticket-reference">
                        PRQ-1
                    </div>
                </div>
                <div className="right-summary">
                        <div className="priority">
                        <i class="fas fa-circle" style={ { color: "greenyellow" } }></i>
                        <p>Low Priority</p>
                    </div>
                    <div className="engineer">
                        <p>Not assigned</p>
                    </div>
                    <div className="datetime">
                        <p>Last Updated 20/07/21 @ 11:00</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default TicketPreview
