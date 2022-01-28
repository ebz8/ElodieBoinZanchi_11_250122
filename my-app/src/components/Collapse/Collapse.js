import './Collapse.scss'
import { useEffect, useState, useRef } from 'react'

import { ReactComponent as CloseIcon } from '../../assets/icons/chevron-down.svg'


export default function Collapse(props) {
  
  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState()
  
  const toggleState = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  const refHeight = useRef()
  
  // refaire le collapse en version accessible AAA
  if (props.liste) {
    return (
      <div className="collapse">
        <button onClick={toggleState} className="collapse-bar">
          <h2>{props.titre}</h2>
          <CloseIcon alt="Déplier / Replier" className={toggle ? 'close-icon open' : 'close-icon'}/>
        </button>

        <div ref={refHeight}
        className={toggle ? 'collapse-content open' : 'collapse-content'}
        style={{height: toggle ? `${heightEl}`: `0px`}}>
          <ul aria-hidden={toggle ? 'true' : 'false'}>
            {props.liste.map((item) => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </div>
      </div>
  )

  } else {
    return (
        <div className="collapse">
          <button onClick={toggleState} className="collapse-bar">
            <h2>{props.titre}</h2>
            <CloseIcon alt="Déplier / Replier" className={toggle ? 'close-icon open' : 'close-icon'}/>
          </button>
  
          <div ref={refHeight}
          className={toggle ? 'collapse-content open' : 'collapse-content'}
          style={{height: toggle ? `${heightEl}`: `0px`}}>
            <p aria-hidden={toggle ? 'true' : 'false'}>{props.texte}</p>
          </div>
        </div>
    )
  }

}
