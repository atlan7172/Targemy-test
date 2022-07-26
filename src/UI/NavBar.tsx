import React from "react";
// @ts-ignore
import myFeed from '../images/menu/My Feed.svg'
// @ts-ignore
import trends from '../images/menu/Trends.svg'
// @ts-ignore
import bookmark from '../images/menu/icon_bookmark.svg'
// @ts-ignore
import Post from '../images/menu/New Post.svg'
// @ts-ignore
import notification from '../images/menu/false.svg'
// @ts-ignore
import cards from '../images/menu/My cards.svg'

const NavBar = () => {
    return (
        <div className="menu">
            <a className="menu__user">
                <img src={require(".././images/user_avatar.png")} alt="avatar"
                     className="menu__user-avatar avatar"/>
                <div className="menu__user-box">
                    <div className="menu__user-name">Frank Boehn</div>
                    <div className="menu__user-profile">профиль</div>
                </div>
            </a>
            <div className="menu__box">
                <div className="menu__timeline menu__box-item">
                    <img src={myFeed} alt="timeline"
                         className="menu__box-img"/>
                    Лента
                </div>
                <div className="menu__trends menu__box-item">
                    <img src={trends} alt="trends"
                         className="menu__box-img"/>
                    Тренды
                </div>
                <div className="menu__marks menu__box-item">
                    <img src={bookmark} alt="marks"
                         className="menu__box-img"/>
                    Закладки
                </div>
            </div>
            <div className="menu__box">
                <div className="menu__create-post menu__box-item">
                    <img src={Post} alt="post"
                         className="menu__box-img"/>
                    Создать пост
                </div>
                <div className="menu__notification menu__box-item">
                    <img src={notification} alt="notification"
                         className="menu__box-img"/>
                    Уведомления
                </div>
                <div className="menu__mycards menu__box-item">
                    <img src={cards} alt="cards"
                         className="menu__box-img"/>
                    Мои карточки
                </div>
            </div>
        </div>
    )
}

export default NavBar