import './Gallery.scss'

import Thumbnail from '../Thumbnail/Thumbnail'

export default function Gallery(props) {
    return (
        <ul className='gallery'>
            {props.housings.map((housing, index) => {
                return <Thumbnail key={index} { ...housing}/>
            })}
        </ul>
        )
    }