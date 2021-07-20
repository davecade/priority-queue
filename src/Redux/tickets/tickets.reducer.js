import { TicketActionTypes } from '../tickets/ticket.actions'

const INITIAL_STATE = {
    tickets: [],
    loading: false,
    error: null
}

const ticketReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TicketActionTypes.ADD_NEW_TICKET:
            return {
                ...state,
                tickets: [...state.tickets, action.payload]
            }
        case TicketActionTypes.FETCH_TICKET_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case TicketActionTypes.FETCH_TICKET_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    }
}

export default ticketReducer;