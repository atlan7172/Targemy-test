// @ts-ignore
import logo from "../images/logo-targemy.svg";
import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a className="header__logo" href="#">
                        <img src={logo} alt="logo" className="header__logo-img"/>
                    </a>
                    <div className="header__search-box">
                        <input type="text" placeholder="Искать посты" className="header__search"/>
                    </div>
                    <div className="header__post">
                        <a href="#" className="header__post-notification">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6.99903" cy="11.2424" r="2.75758"
                                        transform="rotate(-90 6.99903 11.2424)"
                                        fill="url(#paint0_linear_182_278)"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 4.66663L14 11.6666H0L7 4.66663Z"
                                      fill="url(#paint1_linear_182_278)"/>
                                <rect x="5" width="4" height="4" rx="2" fill="url(#paint2_linear_182_278)"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7V10H2V7Z"
                                      fill="url(#paint3_linear_182_278)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_182_278" x1="4.24146" y1="8.48485"
                                                    x2="4.24146"
                                                    y2="14" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.000316723" stopColor="#393F50"/>
                                        <stop offset="1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_182_278" x1="0" y1="4.66663" x2="0"
                                                    y2="11.6666"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0.000316723" stopColor="#393F50"/>
                                        <stop offset="1"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_182_278" x1="5" y1="0" x2="5" y2="4"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0.000316723" stopColor="#393F50"/>
                                        <stop offset="1"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_182_278" x1="2" y1="2" x2="2" y2="10"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0.000316723" stopColor="#393F50"/>
                                        <stop offset="1"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                        <a href="#" className="header__post-add">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="6.33301" y="0.5" width="3.33333" height="15" rx="1.66667"
                                      fill="url(#paint0_linear_182_273)"/>
                                <rect x="15.5" y="6.33337" width="3.33333" height="15" rx="1.66667"
                                      transform="rotate(90 15.5 6.33337)" fill="url(#paint1_linear_182_273)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_182_273" x1="6.33301" y1="0.5" x2="6.33301"
                                                    y2="15.5"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0.000316723" stopColor="#393F50"/>
                                        <stop offset="1"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_182_273" x1="15.5" y1="6.33337" x2="15.5"
                                                    y2="21.3334"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop offset="0.000316723" stopColor="#393F50"/>
                                        <stop offset="1"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div className="header__user">
                        <img src={require(".././images/user_avatar.png")} alt="user-photo"
                             className="header__user-img"/>
                        <p className="header__user-name">Frank</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header