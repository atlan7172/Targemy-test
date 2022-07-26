import {instance} from "./API";
import {postType} from "../Types/types";

export const postAPI = {
    getPost() {
        return instance.get<postType>(`post/3`)
    },
}