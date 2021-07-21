import { all, call } from 'redux-saga/effects'
import { ticketSagas } from './tickets/ticket.sagas'

function* rootSaga() {
    yield all([
        call(ticketSagas)
    ])
}

export default rootSaga;