import { TicketActionTypes } from "./ticket.types";

export const addNewTicket = ticket => ({
    type: TicketActionTypes.ADD_NEW_TICKET,
    payload: ticket
})

export const fetchTicketDataStart = () => ({
    type: TicketActionTypes.FETCH_TICKET_DATA_START
})

export const fetchTicketDataSuccess = () => ({
    type: TicketActionTypes.FETCH_TICKET_DATA_SUCCESS
})

export const fetchTicketDataFailure = error => ({
    type: TicketActionTypes.FETCH_TICKET_DATA_FAILURE,
    payload: error
})