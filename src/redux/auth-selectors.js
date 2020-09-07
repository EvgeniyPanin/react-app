export const selectIsAuth = function(state) {
    return state.auth.isAuth
}

export const selectLogin = function(state) {
    return state.auth.login
}

export const selectId = function(state) {
    return state.auth.id
}