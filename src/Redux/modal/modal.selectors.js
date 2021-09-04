import { createSelector } from 'reselect'

const selectModal = state => state.modal

export const selectCreateModalEnabled = createSelector(
    selectModal,
    modal => modal.createModalEnabled
)

export const selectEditModalEnabled = createSelector(
    selectModal,
    modal => modal.editModalEnabled
)

export const selectAssignModalEnabled = createSelector(
    selectModal,
    modal => modal.assignModalEnabled
)

export const selectAssignModalTicket = createSelector(
    selectModal,
    modal => modal.assignModalTicket
)

export const selectEditModalTicket = createSelector(
    selectModal,
    modal => modal.editModalTicket
)