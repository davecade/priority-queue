import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    userList: [],
    loading: false,
    error: null
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case UserActionTypes.START_LOADING:
            return {
                ...state,
                loading: true
            }

        case UserActionTypes.ADD_EXISTING_USERS_TO_STATE:
            return {
                ...state,
                userList: action.payload
            }
        
        case UserActionTypes.FETCH_USER_DATA_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    error: null
                }
    
        case UserActionTypes.FETCH_USER_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return {
                ...state
            }
    }
}

export default userReducer;