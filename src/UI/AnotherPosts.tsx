import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../BLL/store";
import AnotherPost from "./AnotherPost";
import {useEffect} from "react";
import {getPictures} from "../BLL/unsplashSlice";

const AnotherPosts = () => {

    const dispatch = useDispatch<AppDispatch>()
    const items = useSelector((state: RootState) => state.unsplash.items)
    const pictures = items.map(item => <AnotherPost key={item.id} image={item.download_url}/>)

    useEffect(() => {
        dispatch(getPictures())
    }, [])

    return (
        <div className='samePosts'>
            <div className='container'>
                <h4 className='samePosts__title'>Похожие посты</h4>
                <div className='samePosts__inner'>
                    {pictures}
                </div>
            </div>
        </div>
    )
}

export default AnotherPosts