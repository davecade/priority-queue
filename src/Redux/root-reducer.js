import { combineReducers } from 'redux';
import ticketReducer from './tickets/tickets.reducer'
import modalReducer from './modal/modal.reducer'
import userReducer from './users/user.reducer'

export default combineReducers({
    tickets: ticketReducer,
    modal: modalReducer,
    users: userReducer
})