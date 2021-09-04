import { ModalActionTypes } from "./modal.types";

export const enableCreateModal = () => ({
    type: ModalActionTypes.ENABLE_CREATE_MODAL,
})

export const disableCreateModal = () => ({
    type: ModalActionTypes.DISABLE_CREATE_MODAL,
})

export const enableEditModal = ticket => ({
    type: ModalActionTypes.ENABLE_CREATE_EDIT_MODAL,
    payload: ticket
})

export const disableEditModal = () => ({
    type: ModalActionTypes.DISABLE_EDIT_MODAL,
})

export const enableAssignModal = ticket => ({
    type: ModalActionTypes.ENABLE_ASSIGN_MODAL,
    payload: ticket
})

export const disableAssignModal = () => ({
    type: ModalActionTypes.DISABLE_ASSIGN_MODAL,
})