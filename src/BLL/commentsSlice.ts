import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import {commentType} from "../Types/types";
import {commentsAPI} from "../DAL/commentsAPI";


export type initialStateType = {
    items: Array<commentType>
    isLoading: boolean
    firstLoading: boolean
}

const initialState: initialStateType = {
    items: [],
    isLoading: false,
    firstLoading: false
}

export const commentsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Array<commentType>>) {
            state.items = action.payload
        },
        setLoad(state, action) {
            state.isLoading = action.payload
        },
        setFirstLoad(state, action){
            state.firstLoading = action.payload
        },
        addItems(state, action: PayloadAction<Array<commentType>>) {
            state.items.push(...action.payload)
        }
    },
})

export const getComments = (page = 1) => {
    return async (dispatch: Dispatch) => {
        dispatch(setFirstLoad(true))
        const response = await commentsAPI.getComments(page)
        dispatch(setItems(response.data.items))
        dispatch(setFirstLoad(false))
    }
}

export const addComments = (page: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setLoad(true))
        const response = await commentsAPI.getComments(page)
        dispatch(addItems(response.data.items))
        dispatch(setLoad(false))
    }
}

export const {setItems, setLoad, addItems, setFirstLoad} = commentsSlice.actions

export default commentsSlice.reducer

