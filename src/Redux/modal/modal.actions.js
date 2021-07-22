import { ModalActionTypes } from "./modal.types";

export const enableModal = () => ({
    type: ModalActionTypes.ENABLE_MODAL,
})

export const disableModal = () => ({
    type: ModalActionTypes.DISABLE_MODAL,
})