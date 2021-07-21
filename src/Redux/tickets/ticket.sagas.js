import { takeLatest, put, all, call, } from "redux-saga/effects";
import { TicketActionTypes } from "./ticket.types";
import { fetchTicketDataSuccess, fetchTicketDataFailure, addExistingTicketsToState, setLoading } from './ticket.actions'

export function* fetchTicketsAsync() {
    try {
 
        yield put(setLoading(true))
        const res = yield fetch('/tickets')
        const data = yield res.json();
        yield put(addExistingTicketsToState(data))
        yield put(fetchTicketDataSuccess())

    } catch(error) {
        yield put(fetchTicketDataFailure(error))
    }
}

export function* onfetchTicketDataStart() {
    yield takeLatest(TicketActionTypes.FETCH_TICKET_DATA_START, fetchTicketsAsync)
}

export function* ticketSagas() {
    yield all([
        call(onfetchTicketDataStart)
    ])
}