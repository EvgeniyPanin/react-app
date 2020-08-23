import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '727c92a5-5e8f-4915-b4a2-a82f90582417'
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
        return instance.get(`auth/me`).then(res => res.data)}
    }

export const profileAPI = {
    getProfile(path) {
        return instance.get(`profile/${path}`)}
    }
