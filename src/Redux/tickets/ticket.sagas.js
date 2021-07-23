import { takeLatest, put, all, call, } from "redux-saga/effects";
import { TicketActionTypes } from "./ticket.types";
import {
    fetchTicketDataSuccess,
    fetchTicketDataFailure,
    addExistingTicketsToState,
    startLoading,
    addNewTicketToState,
    addNewTicketFailure,
    addNewTicketSuccess
} from './ticket.actions'

export function* fetchTicketsAsync() {
    try {
        yield put(startLoading())
        const res = yield fetch('/tickets')
        const data = yield res.json();
        yield put(addExistingTicketsToState(data))
        yield put(fetchTicketDataSuccess())

    } catch(error) {
        yield put(fetchTicketDataFailure(error))
    }
}

export function* addNewTicketAsync({payload}) {
    try {
        yield put(startLoading())
        const res = yield fetch('/tickets', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = yield res.json(payload);

        yield put(addNewTicketToState(data))
        yield put(addNewTicketSuccess())

    } catch(error) {
        yield put(addNewTicketFailure(error))
    }
}

export function* onFetchTicketDataStart() {
    yield takeLatest(TicketActionTypes.FETCH_TICKET_DATA_START, fetchTicketsAsync)
}

export function* onAddNewTicket() {
    yield takeLatest(TicketActionTypes.ADD_NEW_TICKET, addNewTicketAsync)
}

export function* ticketSagas() {
    yield all([
        call(onFetchTicketDataStart),
        call(onAddNewTicket)
    ])
}