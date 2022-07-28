import {FC} from "react";
import {Link} from "react-router-dom";

type propsType = {
    image: string
}

const AnotherPost: FC<propsType> = ({image}) => {

    return (
        <a className='samePosts__box'>
            <Link className='samePosts__user' to=''>
                <img className='avatar' src={require('./../images/user_avatar.png')}/>
                <div className='samePosts__user--inner'>
                    <a className='samePosts__user--name'>Joslin Rodgers</a>
                    <p className='samePosts__user--position'>Цель</p>
                </div>
            </Link>
            <img src={image} className='samePosts__item'/>
            <div className='samePosts__content'>
                <div className='samePosts__time'>2 day ago</div>
                <div className='samePosts__info'>
                    <img src={require('./../images/stories-logo.png')}/>
                    <div className='samePosts__name'>Книга «Дом у моря»</div>
                </div>
                <div className='samePosts__text'>
                    Certe, inquam, pertinax non fuisse torquem detraxit hosti...
                </div>
                <div className='samePosts__action'>
                    <img src={require('./../images/stories-visiter.png')}/>
                    <div className='samePosts__links'>
                        <a className='samePosts__link'>
                            <img src={require('./../images/stories-like.png')}/>
                            <span className='samePosts__count'>256k</span>
                        </a>
                        <a className='samePosts__link'>
                            <img src={require('./../images/stories-like.png')}/>
                            <span className='samePosts__count'>256k</span>
                        </a>
                        <a className='samePosts__link'>
                            <img src={require('./../images/stories-like.png')}/>
                            <span className='samePosts__count'>256k</span>
                        </a>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default AnotherPost