import React, { useState, useEffect } from 'react'
import './Main.styles.scss'
import TicketPreview from '../../components/Ticket-Preview/TicketPreview.component'
import { connect } from 'react-redux'
import { quickSort, getSearchedTickets, getFilteredTickets } from '../../JS_Utilities/_utilities'
import Loading from '../../components/Loading/Loading.component'
import { createStructuredSelector } from 'reselect'
import { selectTicketList, selectTicketLoading, selectSearchField } from '../../Redux/tickets/ticket.selectors'




const MainPage = ({ ticketList, searchField, loading }) => {
    const [ sortBy, setSortBy ] = useState("id")
    const [ filterBy, setFilterBy ] = useState("unresolved")
    const [ heading, setHeading ] = useState("")

    // -- These functions handle the searchfield, filter, and sort results
    let searchedTickets = getSearchedTickets(ticketList, searchField)
    let fileteredTickets = getFilteredTickets(searchedTickets, filterBy)
    let sortedTickets = quickSort(fileteredTickets, sortBy)
    let finalList = sortedTickets === undefined ? fileteredTickets : sortedTickets


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
    }, [searchedTickets, loading])

    
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
                    <select onChange={handleFilter}>
                        <option value="filter">Select Filter</option>
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
                    <select onChange={handleSortBy}>
                        <option value="sort">Select Sort</option>
                        <option value="id">Date Created</option>
                        <option value="lastUpdated">Last Updated</option>
                        <option value="status">Status</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
            </div>
            <ul className="ticket-list">
                {   
                    finalList.map( ticket => (
                        <TicketPreview key={ticket.id} ticket={ticket} />
                    ))
                }

            </ul>

            <div className="footer">

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    ticketList: selectTicketList,
    searchField: selectSearchField,
    loading: selectTicketLoading
})

export default connect(mapStateToProps)(MainPage)