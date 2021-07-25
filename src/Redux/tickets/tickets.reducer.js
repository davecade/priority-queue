import { TicketActionTypes } from './ticket.types'

const INITIAL_STATE = {
    ticketList: [],
    loading: false,
    error: null
}

const ticketReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TicketActionTypes.ADD_EXISTING_TICKETS_TO_STATE:
            return {
                ...state,
                ticketList: action.payload
            }

        case TicketActionTypes.ADD_NEW_TICKET_TO_STATE:
            return {
                ...state,
                ticketList: [...state.ticketList, action.payload]
            }

        case TicketActionTypes.START_LOADING:
            return {
                ...state,
                loading: true,
                error: null
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
        case TicketActionTypes.SET_SELECTED_TICKET:
            return {
                ...state,
                selectedTicket: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default ticketReducer;