import { takeLatest, put, all, call, } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";
import {
    startLoading,
    addExistingUsersToState,
    fetchUserDataSuccess,
    fetchUserDataFailure,
} from './user.actions'

export function* fetchUsersAsync() {
    try {
        yield put(startLoading())
        const res = yield fetch('/users')
        const data = yield res.json();
        yield put(addExistingUsersToState(data))
        yield put(fetchUserDataSuccess())

    } catch(error) {
        yield put(fetchUserDataFailure(error))
    }
}

export function* onFetchUserDataStart() {
    yield takeLatest(UserActionTypes.FETCH_USER_DATA_START, fetchUsersAsync)
}

export function* userSagas() {
    yield all([
        call(onFetchUserDataStart)
    ])
}