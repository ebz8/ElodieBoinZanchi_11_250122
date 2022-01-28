import './Thumbnail.scss'

import { Link } from 'react-router-dom'

export default function Thumbnail(props) {
  return (
        <li className="thumbnail" key={props.id}>
            <Link to={`/housing/${props.id}`}>
                <img src={props.img} alt={props.titre} />
                <h3>{props.titre}</h3>                
            </Link>
        </li>
        )
    }
