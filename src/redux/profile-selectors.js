export const selectUser = function(state) {
    return state.profilePage.profile
};

export const selectStatus = function(state) {
    return state.profilePage.status
};

export const selectPosts = function(state) {
    return state.profilePage.posts
};