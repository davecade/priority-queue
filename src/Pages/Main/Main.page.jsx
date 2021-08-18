import React, { useState, useEffect } from 'react'
import './Main.styles.scss'
import TicketPreview from '../../components/Ticket-Preview/TicketPreview.component'
import { connect } from 'react-redux'
import { quickSort } from '../../JS_Utilities/_utilities'
import Loading from '../../components/Loading/Loading.component'

const MainPage = ({ ticketList, searchField, loading }) => {
    const [ sortBy, setSortBy ] = useState("id")
    const [ filterBy, setFilterBy ] = useState("unresolved")
    const [ heading, setHeading ] = useState("")

    let searchedTickets = ticketList.filter(ticket => {
        let searchString = `${ticket.issue} ${ticket.description} ${ticket.user} ${ticket.assigned} PRQ-${ticket.id}`
        return searchString.toLowerCase().includes(searchField.toLowerCase())
    })

    let fileteredTickets = searchedTickets.filter(ticket => {
        let statusNames = ['new', 'in progress', 'resolved' ]
        let priorityNames = [ 'low', 'medium', 'high' ]

        if(filterBy==='unresolved') {

            return ticket.status!=='resolved'

        } else if(statusNames.includes(filterBy)) {

            return ticket.status===filterBy

        } else if(priorityNames.includes(filterBy)) {

            return (ticket.priority===filterBy && ticket.status!=='resolved')
        }

        return ticket
    })

    let sortedTickets = quickSort(fileteredTickets, sortBy)

    

    const handleSortBy = event => {
        setSortBy(event.target.value)
    }

    const handleFilter = event => {
        setFilterBy(event.target.value)
    }

    useEffect(() => {
        if(searchedTickets.length===0 && loading) {
            setHeading("Loading Tickets")
        } else if(searchedTickets.length===0 && !loading) {
            setHeading("No Tickets Found")
        } else {
            setHeading("Tickets")
        }
    })

    
    return (
        <div className="main-page">
            <div className="heading-container">
                <h1 className="mainpage-heading">{heading}</h1>
                <Loading heading={heading} />
            </div>
                <div className="filters">
                <div className="filter-by" style={{
                    visibility: searchedTickets.length===0? "hidden" : "visible"
                }}>
                    <span className="filter-label">Filter: </span>
                    <select onChange={handleFilter}>
                        <option value="unresolved">Unresolved</option>
                        <option value="new">New</option>
                        <option value="in progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                        <option value="all">All Tickets</option>
                    </select>
                </div>
                <div className="sort-by" style={{
                    visibility: searchedTickets.length===0? "hidden" : "visible"
                }} >
                    <span className="sortby-label">Sort By: </span>
                    <select onChange={handleSortBy}>
                        <option value="id">Date Created</option>
                        <option value="lastUpdated">Last Updated</option>
                        <option value="status">Status</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
            </div>
            <ul className="ticket-list">
                {   
                    (sortBy==='id'?fileteredTickets:sortedTickets).map( ticket => (
                        <TicketPreview key={ticket.id} ticket={ticket} />
                    ))
                }

            </ul>

            <div className="footer">

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    ticketList: state.tickets.ticketList,
    searchField: state.tickets.searchField,
    loading: state.tickets.loading
})

export default connect(mapStateToProps)(MainPage)