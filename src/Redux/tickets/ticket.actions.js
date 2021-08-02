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

export const addNewTicketToState = ticket => ({
    type: TicketActionTypes.ADD_NEW_TICKET_TO_STATE,
    payload: ticket
})

export const updateTicket = ticket => ({
    type: TicketActionTypes.UPDATE_TICKET,
    payload: ticket
})

export const updateTicketInState = ticket => ({
    type: TicketActionTypes.UPDATE_TICKET_IN_STATE,
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

export const addNewTicketSuccess = () => ({
    type: TicketActionTypes.ADD_NEW_TICKET_SUCCESS
})

export const addNewTicketFailure = error => ({
    type: TicketActionTypes.ADD_NEW_TICKET_FAILURE,
    payload: error
})

export const updateTicketSuccess = () => ({
    type: TicketActionTypes.ADD_NEW_TICKET_SUCCESS
})

export const updateTicketFailure = error => ({
    type: TicketActionTypes.ADD_NEW_TICKET_FAILURE,
    payload: error
})

export const updateSearchField = input => ({
    type: TicketActionTypes.UPDATE_SEARCH_FIELD,
    payload: input
})