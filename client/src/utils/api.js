import axios from 'axios'

// create an axios instance

const httpClient = axios.create({
    baseURL: "http://127.0.0.1:3000"
})

export default httpClient;