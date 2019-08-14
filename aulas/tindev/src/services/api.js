import axios from 'axios';

const api = axios.create({
    //Using laptop's ip because of android emulator: http://192.168.15.18:3333
    baseURL: 'http://192.168.15.18:3333'
    //Heroku URL: https://tindevtest.herokuapp.com/
});

export default api;
