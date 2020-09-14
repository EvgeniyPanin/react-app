import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '4fbd58e1-6a30-44ad-9c2a-27f02eab3798'
    }
})

export const usersAPI = {
    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}`).then(res => res.data)}
    }

export const followAPI = {
    deleteFollow(userID) {
        return instance.delete(`follow/${userID}`).then(res => res.data)
    },
    postFollow(userID) {
        return instance.post(`follow/${userID}`).then(res => res.data)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(res => res.data)},
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(res => res.data)},
    logout() {
        return instance.delete(`auth/login`).then(res => res.data)}
    }

export const profileAPI = {
    getProfile(path) {
        return instance.get(`profile/${path}`)},
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`)},
    setStatus(status) {
        return instance.put(`profile/status`, { status }).then(res => res.data)},
    }
