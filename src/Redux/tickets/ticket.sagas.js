import { takeLatest, put, all, call, } from "redux-saga/effects";
import { TicketActionTypes } from "./ticket.types";
import { firestore, convertCollecionsSnapShotToMap } from '../../Firebase/firebase.utils'
import {
    fetchTicketDataSuccess,
    fetchTicketDataFailure,
    addExistingTicketsToState,
    updateTicketInState,
    startLoading,
    addNewTicketToState,
    addNewTicketSuccess,
    addNewTicketFailure,
    updateTicketSuccess,
    updateTicketFailure
} from './ticket.actions'

//-- Fetch tickets from the Database
export function* fetchTicketsAsync() {
    try {

        yield put(startLoading())
        const collectionRef = firestore.collection('tickets')
        const snapshot = yield collectionRef.get()
        let fetchedData = convertCollecionsSnapShotToMap(snapshot)
        yield put(addExistingTicketsToState(fetchedData))
        yield put(fetchTicketDataSuccess())
        
    } catch(error) {
        yield put(fetchTicketDataFailure(error))
    }
}

//-- Add new ticket to Database
export function* addNewTicketAsync({payload}) {
    try {
        yield put(startLoading())
        const newDocRef = firestore.doc(`tickets/PQR-${payload.id}`);
        yield newDocRef.set(payload)
        const snapshot = yield firestore.doc(`tickets/PQR-${payload.id}`).get()
        const newTicket = snapshot.data()
        yield put(addNewTicketToState(newTicket))
        yield put(addNewTicketSuccess())

    } catch(error) {
        yield put(addNewTicketFailure(error))
    }
}

//-- Update existing ticket in Database
export function* updateTicketAsync({payload}) {
    try {

        yield put(startLoading())
        yield firestore.doc(`tickets/PQR-${payload.id}`).update({...payload})
        const snapshot = yield firestore.doc(`tickets/PQR-${payload.id}`).get()
        const updatedTicket = snapshot.data()
        yield put(updateTicketInState(updatedTicket))
        yield put(updateTicketSuccess())

    } catch(error) {
        yield put(updateTicketFailure(error))
    }
}
export function* onFetchTicketDataStart() {
    yield takeLatest(TicketActionTypes.FETCH_TICKET_DATA_START, fetchTicketsAsync)
}

export function* onAddNewTicket() {
    yield takeLatest(TicketActionTypes.ADD_NEW_TICKET, addNewTicketAsync)
}

export function* onUpdateTicket() {
    yield takeLatest(TicketActionTypes.UPDATE_TICKET, updateTicketAsync)
}


export function* ticketSagas() {
    yield all([
        call(onFetchTicketDataStart),
        call(onAddNewTicket),
        call(onUpdateTicket)
    ])
}