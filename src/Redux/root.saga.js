import { all, call } from 'redux-saga/effects'
import { ticketSagas } from './tickets/ticket.sagas'
import { userSagas } from './users/user.sagas'

function* rootSaga() {
    yield all([
        call(ticketSagas),
        call(userSagas)
    ])
}

export default rootSaga;