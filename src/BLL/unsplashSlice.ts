import {createSlice, Dispatch} from '@reduxjs/toolkit'
import {unsplashAPI} from "../DAL/unsplashAPI";
import {unsplashPicture} from "../Types/types";

export type initialStateType = {
    items: Array<unsplashPicture>
}

const initialState: initialStateType = {
    items: []
}

export const unsplashSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setPictures(state, action) {
            state.items = action.payload
        }
    },
})

export const getPictures = () => {
    return async (dispatch: Dispatch) => {
        const response = await unsplashAPI.getPictures()
        dispatch(setPictures(response.data))
    }
}

export const {setPictures} = unsplashSlice.actions

export default unsplashSlice.reducer

