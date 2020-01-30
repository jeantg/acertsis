import axios from 'axios';
const api = axios.create({
    //baseURL: 'http://www.mocky.io/v2/5dee4725330000355498460b'
    baseURL: 'https://acertsis.herokuapp.com'
})
export default api;