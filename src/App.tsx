import React from 'react';
import './App.scss';
// @ts-ignore
import logo from './images/logo-targemy.svg'
import Header from './UI/Header';
import NavBar from "./UI/NavBar";
import Post from "./UI/Post";
import Comments from "./UI/Comments";
import AnotherPosts from "./UI/AnotherPosts";

const App = () => {
    return (
        <div>
            <Header/>
            <section className="content">
                <div className="content__container">
                    <div className="content__inner">
                        <NavBar/>
                        <Post/>
                        <Comments/>
                    </div>
                </div>
            </section>
            <AnotherPosts/>
        </div>
    )
}

export default App;
