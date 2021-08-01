import { UserActionTypes } from './user.types'

export const fetchUserDataStart = () => ({
    type: UserActionTypes.FETCH_USER_DATA_START,
})

export const startLoading = () => ({
    type: UserActionTypes.START_LOADING,
})

export const addExistingUsersToState = users => ({
    type: UserActionTypes.ADD_EXISTING_USERS_TO_STATE,
    payload: users
})

export const fetchUserDataSuccess = () => ({
    type: UserActionTypes.FETCH_USER_DATA_SUCCESS
})

export const fetchUserDataFailure = () => ({
    type: UserActionTypes.FETCH_USER_DATA_FAILURE
})