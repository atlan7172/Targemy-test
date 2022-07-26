import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import {postAPI} from "../DAL/postAPI";
import {postType} from "../Types/types";


export type initialStateType = {
    postImg: string
    postContent: string
    likes: number
    title: string
}

const initialState: initialStateType = {
    postImg: '',
    postContent: '',
    likes: 0,
    title: ''
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPost(state, action: PayloadAction<postType>) {
            state.postImg = action.payload.photo_cover
            state.postContent = action.payload.content
            state.likes = action.payload.likes
            state.title = action.payload.title
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

