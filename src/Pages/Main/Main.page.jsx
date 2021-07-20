import React from 'react'
import './Main.styles.scss'
import TicketPreview from '../../components/Ticket-Preview/TicketPreview.component'

const MainPage = () => {
    return (
        <div className="main-page">
            <h1>Tickets</h1>
            <ul className="ticket-list">
                <TicketPreview />
            </ul>
        </div>
    )
}

export default MainPage




{/* <li className="ticket-preview">
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
<li className="ticket-preview">
<BugIcon />
<div className="ticket-content">
    <div className="left-summary">
        <div className="status">
            <p style={{
                backgroundColor: "#1010ce",
                color: "#f0f6fc"
            }}>
                In Progress
            </p>
        </div>
        <div className="issue">
            My Menulog app doesnt work! FIX IT!!
        </div>
        <div className="ticket-reference">
            PRQ-2
        </div>
    </div>
    <div className="right-summary">
         <div className="priority">
            <i class="fas fa-circle" style={ { color: "orange" } }></i>
            <p>Medium Priority</p>
        </div>
        <div className="engineer">
            <p>Assigned to Bonn</p>
        </div>
        <div className="datetime">
            <p>Last Updated 20/07/21 @ 11:00</p>
        </div>
    </div>
</div>
</li>
<li className="ticket-preview">
<BugIcon />
<div className="ticket-content">
<div className="left-summary">
        <div className="status">
            <p style={{
                backgroundColor: "#7197bd",
                color: "black",
                fontWeight: 'bold',
            }}>
                Resolved
            </p>
        </div>
        <div className="issue">
            My monitor doesn't work. Help!
        </div>
        <div className="ticket-reference">
            PRQ-3
        </div>
    </div>
    <div className="right-summary">
         <div className="priority">
            <i class="fas fa-circle" style={ { color: "red" } }></i>
            <p>High Priority</p>
        </div>
        <div className="engineer">
            <p>Assigned to Ayra</p>
        </div>
        <div className="datetime">
            <p>Last Updated 20/07/21 @ 11:00</p>
        </div>
    </div>
</div>
</li>
<li className="ticket-preview">
<BugIcon />
<div className="ticket-content">
Test
</div>
</li>
<li className="ticket-preview">
<BugIcon />
<div className="ticket-content">
Test
</div>
</li>
<li className="ticket-preview">
<BugIcon />
<div className="ticket-content">
    Test
</div>
</li>
<li className="ticket-preview">
<BugIcon />
<div className="ticket-content">
Test
</div>
</li> */}