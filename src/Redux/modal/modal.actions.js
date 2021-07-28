import { ModalActionTypes } from "./modal.types";

export const enableModal = () => ({
    type: ModalActionTypes.ENABLE_MODAL,
})

export const disableModal = () => ({
    type: ModalActionTypes.DISABLE_MODAL,
})

export const enableEditModal = ticket => ({
    type: ModalActionTypes.ENABLE_EDIT_MODAL,
    payload: ticket
})

export const disableEditModal = () => ({
    type: ModalActionTypes.DISABLE_EDIT_MODAL,
})