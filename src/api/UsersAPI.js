import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true

})

export const usersAPI = {
    getUsers(currentPage) {
        return instance.get(`users?page=${currentPage}`).then(response => response.data)}
    }
