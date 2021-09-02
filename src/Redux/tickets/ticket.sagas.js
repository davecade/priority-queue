import { takeLatest, put, all, call, } from "redux-saga/effects";
import { TicketActionTypes } from "./ticket.types";
import { firestore } from '../../Firebase/firebase.utils'
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

import { addCollectionAndDocuments } from '../../Firebase/firebase.utils'


export const convertCollecionsSnapShotToMap = collections => {
    return collections.docs.map(doc => {
        return {
            ...doc.data()
        }
    })
}

export function* fetchTicketsAsync() {
    try {
        yield put(startLoading())
        //-- const res = yield fetch('https://ticket-logger-database.herokuapp.com/tickets')
        //-- const data = yield res.json();
        const collectionRef = firestore.collection('tickets')
        let fetchedData = []
        collectionRef.onSnapshot(yield snapshot => {
            convertCollecionsSnapShotToMap(snapshot).forEach( item => {
                fetchedData.push(item)
            })
        })
        yield put(addExistingTicketsToState(fetchedData))
        yield put(fetchTicketDataSuccess())
        
    } catch(error) {
        yield put(fetchTicketDataFailure(error))
    }
}

export function* addNewTicketAsync({payload}) {
    try {
        yield put(startLoading())
        const res = yield fetch('https://ticket-logger-database.herokuapp.com/tickets', {
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

export function* updateTicketAsync({payload}) {
    try {

        yield put(startLoading())
        const res = yield fetch(`https://ticket-logger-database.herokuapp.com/tickets/${payload.id}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const data = yield res.json();
        
        yield put(updateTicketInState(data))
        yield put(updateTicketSuccess())

    } catch(error) {
        yield put(updateTicketFailure(error))
    }
}

export function* addToFirebaseAsync({payload}) {
    try {
        yield addCollectionAndDocuments('tickets', payload)
    } catch(error) {
        console.log("ERRORRRRRR", error)
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

export function* onAddToFirebase() {
    yield takeLatest(TicketActionTypes.ADD_TO_FIREBASE, addToFirebaseAsync)
}


export function* ticketSagas() {
    yield all([
        call(onFetchTicketDataStart),
        call(onAddNewTicket),
        call(onUpdateTicket),
        call(onAddToFirebase)
    ])
}