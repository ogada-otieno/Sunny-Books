import httpClient from "../utils/api";

export const register = (userDetails) => {
    return httpClient.post(`/users`, userDetails)
}

export const login = (userDetails) => {
    return httpClient.post(`/login/`, userDetails)
}