import './BtnCaroussel.scss'

import { ReactComponent as LeftIcon } from '../../assets/icons/chevron-left.svg'
import { ReactComponent as RightIcon } from '../../assets/icons/chevron-right.svg'

export default function BtnCaroussel(props) {
    return (
        <button onClick={props.changeImg}
        className={props.direction === "next" ? "caroussel-btn next" : "caroussel-btn prev"}>
            {props.direction === "next" ? <RightIcon/> : <LeftIcon />}
        </button>
    )
}
