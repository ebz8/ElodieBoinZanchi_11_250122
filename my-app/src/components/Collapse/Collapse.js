import './Collapse.scss'
import { useEffect, useState, useRef } from 'react'

import { ReactComponent as CloseIcon } from '../../assets/icons/chevron-down.svg'


export default function Collapse(props) {
  
  const [toggle, setToggle] = useState(false)
  const toggleState = () => {
    setToggle(!toggle)
  }

  // rajouter une animation pour la hauteur plutôt que display none
  
    return (

      <div className="collapse">
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

        {/* contenu = liste */}
        {props.liste &&
          <ul>
            {props.liste.map(item => <li key={item.toString()}>{item}</li>)}
          </ul>}

        {/* contenu = paragraphe */}
        {props.texte && 
          <p aria-hidden={toggle ? 'true' : 'false'}>{props.texte}</p>}

        </div>
      </div>
  )

}
