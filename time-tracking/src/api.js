import axios from 'axios';

const api = axios.create({
    baseURL: 'https://66717d38e083e62ee43bd274.mockapi.io',
});

export default api;