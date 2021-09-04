// import { takeLatest, put, all, call, } from "redux-saga/effects";
// import { UserActionTypes } from "./user.types";
// import { firestore, convertCollecionsSnapShotToMap } from '../../Firebase/firebase.utils'
// import {
//     startLoading,
//     addExistingUsersToState,
//     fetchUserDataSuccess,
//     fetchUserDataFailure,
// } from './user.actions'

// export function* fetchUsersAsync() {
//     try {
//         yield put(startLoading())

//         const collectionRef = firestore.collection('users')
//         const snapshot = yield collectionRef.get()
//         let usersData = convertCollecionsSnapShotToMap(snapshot)

//         yield put(addExistingUsersToState(usersData))
//         yield put(fetchUserDataSuccess())

//     } catch(error) {
//         yield put(fetchUserDataFailure(error))
//     }
// }

// export function* onFetchUserDataStart() {
//     yield takeLatest(UserActionTypes.FETCH_USER_DATA_START, fetchUsersAsync)
// }

// export function* userSagas() {
//     yield all([
//         call(onFetchUserDataStart)
//     ])
// }