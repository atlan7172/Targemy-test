import {configureStore} from "@reduxjs/toolkit"
import postReducer from "./postSlice";
import commentsReducer from "./commentsSlice";
import unsplashReducer from "./unsplashSlice";

export const store = configureStore({
    reducer: {
        post: postReducer,
        comments: commentsReducer,
        unsplash: unsplashReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch