import { ModalActionTypes } from './modal.types'

const INITIAL_STATE = {
    modalEnabled: false,
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

        default:
            return {
                ...state
            }
    }
}

export default modalReducer;