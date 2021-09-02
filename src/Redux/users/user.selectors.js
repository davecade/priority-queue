import { createSelector } from 'reselect'

const selectUsers = state => state.users

export const selectUserList = createSelector(
    selectUsers,
    users => users.userList
)
