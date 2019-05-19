import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',

});
