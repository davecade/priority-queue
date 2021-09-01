import { createSelector } from 'reselect'

const selectTickets = state => state.tickets

export const selectCurrentTicket = createSelector(
    selectTickets,
    tickets => tickets.ticketList
)

export const selectLoading = createSelector(
    selectTickets,
    tickets => tickets.loading
)

export const selectSearchField = createSelector(
    selectTickets,
    tickets => tickets.searchField
)