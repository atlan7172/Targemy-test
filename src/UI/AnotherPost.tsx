import {FC} from "react";

type propsType = {
    image: string
}

const AnotherPost: FC<propsType> = ({image}) => {
    return (
        <>
            <img src={image} className='samePosts__item'/>
        </>
    )
}

export default AnotherPost