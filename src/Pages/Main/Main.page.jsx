import React from 'react'
import './Main.styles.scss'

const MainPage = () => {
    return (
        <div className="main-page">
            <h1>Tickets List</h1>
            <ul className="ticket-list">
                <li className="ticket-entry">Ticket</li>
                <li className="ticket-entry">Ticket</li>
                <li className="ticket-entry">Ticket</li>
                <li className="ticket-entry">Ticket</li>
                <li className="ticket-entry">Ticket</li>
                <li className="ticket-entry">Ticket</li>
                <li className="ticket-entry">Ticket</li>
            </ul>
        </div>
    )
}

export default MainPage
