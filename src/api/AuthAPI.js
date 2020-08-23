import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)}
    }
