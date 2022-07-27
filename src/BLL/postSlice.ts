import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import {postAPI} from "../DAL/postAPI";
import {postType} from "../Types/types";


export type initialStateType = {
    photo_cover: string
    postContent: string
    likes: number
    title: string
    date_create: string
    annotation: string
}

const initialState: initialStateType = {
    photo_cover: '',
    postContent: '',
    likes: 0,
    title: '',
    date_create: '',
    annotation: ''
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPost(state, action: PayloadAction<postType>) {
            state.photo_cover = action.payload.photo_cover
            state.postContent = action.payload.content
            state.likes = action.payload.likes
            state.title = action.payload.title
            state.date_create = action.payload.date_create
            state.annotation = action.payload.annotation
        }
    },
})

export const getPost = () => {
    return async (dispatch: Dispatch) => {
        const response = await postAPI.getPost()
        dispatch(setPost(response.data))
    }
}

export const {setPost} = postSlice.actions

export default postSlice.reducer

