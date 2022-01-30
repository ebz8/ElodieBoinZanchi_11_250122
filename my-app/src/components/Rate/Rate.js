import './Rate.scss'
import { ReactComponent as FilledStar } from '../../assets/icons/star-filled.svg'
import { ReactComponent as EmptyStar } from '../../assets/icons/star-empty.svg'


export default function Rate(props) {
  return (
    <ul className="rate">
      {[...Array(5)].map((star, index) => {
        return (
          <li key={`star${index}`}>
            {index <= props.rating ? <FilledStar/> : <EmptyStar/>}
          </li>
        )
        
      })}
    </ul>
  )
}
