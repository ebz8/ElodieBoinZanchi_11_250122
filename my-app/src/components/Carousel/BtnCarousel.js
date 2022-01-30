import './BtnCarousel.scss'

import { ReactComponent as LeftIcon } from '../../assets/icons/chevron-left.svg'
import { ReactComponent as RightIcon } from '../../assets/icons/chevron-right.svg'

export default function BtnCarousel(props) {
    return (
        <button onClick={props.changeImg}
        className={props.direction === "next" ? "Carousel-btn next" : "Carousel-btn prev"}>
            {props.direction === "next" ? <RightIcon/> : <LeftIcon />}
        </button>
    )
}
