import './Collapse.scss'
import { useState } from 'react'

import { ReactComponent as CloseIcon } from '../../assets/icons/chevron-down.svg'


export default function Collapse(props) {
  
  const [toggle, setToggle] = useState(false)
  const toggleState = () => {
    setToggle(!toggle)
  }
  
    return (

      <div className="collapse" aria-label="Contenu dépliable">
      {/* barre */}
        <button
        onClick={toggleState}
        className="collapse-bar"
        id="collapse-toggle"
        aria-label="Bouton de contrôle du contenu dépliable"
        aria-controls="collapse-content"
        aria-expanded={toggle ? 'true' : 'false'}
        >
          <h2>{props.titre}</h2>
          <CloseIcon
            alt="Déplier / Replier"
            className={toggle ? 'close-icon open' : 'close-icon'}
          />
        </button>

      {/* contenu */}
        <div
        className="collapse-content"
        aria-labelledby="collapse-toggle"
        aria-hidden={toggle ? 'false' : 'true'}
        >

        {/* si contenu = liste */}
        {props.liste &&
          <ul>
            {props.liste.map(item => <li key={item.toString()}>{item}</li>)}
          </ul>}
        {/* si contenu = paragraphe */}
        {props.texte && 
          <p>{props.texte}</p>}

        </div>
      </div>
  )

}
