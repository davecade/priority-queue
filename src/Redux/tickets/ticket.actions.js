import { TicketActionTypes } from "./ticket.types";

export const fetchTicketDataStart = () => ({
    type: TicketActionTypes.FETCH_TICKET_DATA_START,
})

export const addExistingTicketsToState = tickets => ({
    type: TicketActionTypes.ADD_EXISTING_TICKETS_TO_STATE,
    payload: tickets
})

export const addNewTicket = ticket => ({
    type: TicketActionTypes.ADD_NEW_TICKET,
    payload: ticket
})

export const startLoading = () => ({
    type: TicketActionTypes.START_LOADING,
})

export const fetchTicketDataSuccess = () => ({
    type: TicketActionTypes.FETCH_TICKET_DATA_SUCCESS
})

export const fetchTicketDataFailure = error => ({
    type: TicketActionTypes.FETCH_TICKET_DATA_FAILURE,
    payload: error
})