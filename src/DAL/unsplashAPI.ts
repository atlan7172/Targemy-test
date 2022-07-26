import axios from "axios";

export const unsplashAPI = {
    getPictures() {
        return axios.get(`https://picsum.photos/v2/list?page=2&limit=4`)
    },
}