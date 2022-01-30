import './BtnCarousel.scss'

import { ReactComponent as LeftIcon } from '../../assets/icons/chevron-left.svg'
import { ReactComponent as RightIcon } from '../../assets/icons/chevron-right.svg'

export default function BtnCarousel(props) {
    return (
        <button
            onClick={props.changeImg}
            aria-label={props.direction === "next" ? "image suivante" : "image précédente"}
            className={props.direction === "next" ? "carousel-btn next" : "carousel-btn prev"}>
            {props.direction === "next" ? <RightIcon/> : <LeftIcon />}
        </button>
    )
}
