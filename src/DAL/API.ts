import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.stage.targemy.com/v1/'
})