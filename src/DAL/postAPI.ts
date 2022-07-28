import {instance} from "./API";
import {postType} from "../Types/types";

export const postAPI = {
    getPost(id = 3) {
        return instance.get<postType>(`post/${id}`)
    },
}