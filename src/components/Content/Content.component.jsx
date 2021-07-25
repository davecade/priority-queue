import React, { useEffect } from 'react'
import './Content.styles.scss'
import MainPage from '../../Pages/Main/Main.page'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Ticket from '../../Pages/Ticket/Ticket.page'

const Content = ({ selectedTicket }) => {

    useEffect(() => {
        console.log("selectedTicket", selectedTicket)

    }, [selectedTicket])

    return (
        <div className="content-container">
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path='/Ticket' component ={Ticket} />
            </Switch>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedTicket: state.tickets.selectedTicket
})

export default connect(mapStateToProps)(Content)
