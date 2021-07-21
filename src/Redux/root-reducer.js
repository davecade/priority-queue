import { combineReducers } from 'redux';
import ticketReducer from './tickets/tickets.reducer'

export default combineReducers({
    tickets: ticketReducer
})