import { takeLatest, put, all, call, } from "redux-saga/effects";
import { TicketActionTypes } from "./ticket.types";

export function* fetchTicketsAsync() {
    try {

    } catch(error) {

    }
}

export function* onfetchTicketDataStart() {
    yield takeLatest(TicketActionTypes.FETCH_TICKET_DATA_START, fetchTicketsAsync)
}

export function* ticketSagas() {
    yield all([

    ])
}