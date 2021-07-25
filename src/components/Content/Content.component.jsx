import React from 'react'
import './Content.styles.scss'
import MainPage from '../../Pages/Main/Main.page'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Ticket from '../../Pages/TicketPage/Ticket.page'


const Content = () => {
    

    return (
        <div className="content-container">
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route path={`/ticket/PRQ-:ticketId`} render={props => <Ticket ticketId={Number(props.match.params.ticketId)}/>} />
            </Switch>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedTicket: state.tickets.selectedTicket
})

export default connect(mapStateToProps)(Content)
