export const selectUsers = function(state) {
    return state.usersPage.users
}

export const selectCurrentPage = function(state) {
    return state.usersPage.currentPage
}

export const selectPortionNumber = function(state) {
    return state.usersPage.portionNumber
}

export const selectTotalUsersCount = function(state) {
    return state.usersPage.totalUsersCount
}

export const selectPageSize = function(state) {
    return state.usersPage.pageSize
}

export const selectIsFollowingFetching = function(state) {
    return state.usersPage.isFollowingFetching
}

export const selectIsFetching = function(state) {
    return state.usersPage.isFetching
}