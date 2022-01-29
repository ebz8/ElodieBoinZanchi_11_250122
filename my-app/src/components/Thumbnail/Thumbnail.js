import './Thumbnail.scss'

import { Link } from 'react-router-dom'

export default function Thumbnail(props) {
  return (
        <li key={props.id} className="thumbnail">
            <Link to={`/housing/${props.id}`}>
                <img src={props.cover} alt={props.title} />
                <h3>{props.title}</h3>                
            </Link>
        </li>
        )
    }
