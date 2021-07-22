import { combineReducers } from 'redux';
import ticketReducer from './tickets/tickets.reducer'
import modalReducer from './modal/modal.reducer'

export default combineReducers({
    tickets: ticketReducer,
    modal: modalReducer
})