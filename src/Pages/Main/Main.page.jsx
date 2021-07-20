import React from 'react'
import './Main.styles.scss'
import BugIcon from '../../components/BugIcon/BugIcon.component'

const MainPage = () => {
    return (
        <div className="main-page">
            <h1>Tickets List</h1>
            <ul className="ticket-list">
                <li className="ticket-preview">
                    <BugIcon />
                    <div className="ticket-content">
                        <div className="left-summary">
                            <div className="status">
                                <p>New</p>
                            </div>
                            <div className="issue">
                                Computer Crashed - Blue screen of death
                            </div>
                            <div className="ticket-reference">
                                PRQ-1
                            </div>
                        </div>
                        <div className="right-summary">
                             <div className="priority">
                                <i class="fas fa-circle"></i>
                                <p>Low</p>
                            </div>
                            <div className="engineer">
                                <p>Assigned to Dave</p>
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
            </ul>
        </div>
    )
}

export default MainPage
