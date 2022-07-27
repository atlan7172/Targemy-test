import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../BLL/store";
import Comment from "./Comment";
import {addComments, getComments} from "../BLL/commentsSlice";
// @ts-ignore
import messageIcon from './../images/menu/discussion.svg'

const Comments = () => {

    const dispatch = useDispatch<AppDispatch>()
    const items = useSelector((state: RootState) => state.comments.items)
    const firstLoading = useSelector((state: RootState) => state.comments.firstLoading)
    const isLoading = useSelector((state: RootState) => state.comments.isLoading)
    const [currentPage, setCurrentPage] = useState(1)
    const commentsList = items.map(item => {
        return <Comment key={item.id + item.user_id} content={item.content} date={item.date_create}/>
    })

    const loadNewComments = () => {
        setCurrentPage(item => item + 1)
    }

    useEffect(() => {
        dispatch(addComments(currentPage))
    }, [currentPage])

    useEffect(() => {
        dispatch(getComments())
    }, [])

    return (
        <div className="comments">
            <div className="comments__count">
                <img src={messageIcon} alt=""/>
                <div className="comments__count-number">
                    {items.length} комментариев
                </div>
            </div>
            <input type="text" placeholder="Написать комментарий" className="comments__add"/>
            <div className='comments__list'>
                {firstLoading ? <div>LOADING</div> : commentsList}
            </div>
            <button disabled={isLoading} onClick={() => loadNewComments()} className="comments__more">Показать еще
            </button>
        </div>
    )
}

export default Comments