import { ModalActionTypes } from './modal.types'

const INITIAL_STATE = {
    modalEnabled: false,
    editModalEnabled:  false,
    editModalTicket: undefined,
    assignModalEnabled:  false,
    assignModalTicket: undefined
}

const modalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ModalActionTypes.ENABLE_MODAL:
            return {
                ...state,
                modalEnabled: true
            }

        case ModalActionTypes.DISABLE_MODAL:
            return {
                ...state,
                modalEnabled: false
            }

        case ModalActionTypes.ENABLE_EDIT_MODAL:
            return {
                ...state,
                editModalEnabled: true,
                editModalTicket: action.payload
            }

        case ModalActionTypes.DISABLE_EDIT_MODAL:
            return {
                ...state,
                editModalEnabled: false,
                editModalTicket: undefined
            }
        case ModalActionTypes.ENABLE_ASSIGN_MODAL:
            return {
                ...state,
                assignModalEnabled: true,
                assignModalTicket: action.payload
            }

        case ModalActionTypes.DISABLE_ASSIGN_MODAL:
            return {
                ...state,
                assignModalEnabled: false,
                assignModalTicket: undefined
            }

        default:
            return {
                ...state
            }
    }
}

export default modalReducer;