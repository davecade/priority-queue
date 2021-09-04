import { createSelector } from 'reselect'

const selectModal = state => state.modal

export const selectTicketList = createSelector(
    selectTickets,
    tickets => tickets.ticketList
)