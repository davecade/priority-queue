import React, { lazy, Suspense } from 'react'
import './Content.styles.scss'
import { Switch, Route } from 'react-router-dom'
import Loading from '../../components/Loading/Loading.component'
const MainPage = lazy(() => import('../../Pages/Main/Main.page'))
const Ticket = lazy(() => import('../../Pages/TicketPage/Ticket.page'))


const Content = () => {

    return (
        <div className="content-container">
            <Suspense fallback={<Loading heading={"Loading Tickets"} />} >
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path={`/ticket/PRQ-:ticketId`} render={props => (<Ticket ticketId={Number(props.match.params.ticketId)}/>)} />
                </Switch>
            </Suspense>
        </div>
    )
}

export default Content
