import {responseComment} from "../Types/types";
import {instance} from "./API";

export const commentsAPI = {
    getComments(page = 1, count = 3) {
        return instance.get<responseComment>(`comments?page=${page}&per-page=${count}`)
    },
}