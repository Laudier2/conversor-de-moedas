import axios from 'axios'

const api = axios.create({
    baserURL: "https://economia.awesomeapi.com.br/json/all"
})

export default api;