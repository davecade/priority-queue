import { createSelector } from 'reselect'

const selectTickets = state => state.tickets

export const selectTicketList = createSelector(
    selectTickets,
    tickets => tickets.ticketList
)

export const selectTicketLoading = createSelector(
    selectTickets,
    tickets => tickets.loading
)

export const selectSearchField = createSelector(
    selectTickets,
    tickets => tickets.searchField
)