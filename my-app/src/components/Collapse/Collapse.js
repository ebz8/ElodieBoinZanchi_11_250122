import './Collapse.scss'
import { useEffect, useState, useRef } from 'react'

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
  
  return (
      <div className="collapse">
        <div onClick={toggleState} className="collapse-bar">
          <h2>{props.titre}</h2>
          <i class="fas fa-chevron-down"></i>
        </div>

        <div ref={refHeight}
        className={toggle ? 'collapse-content open' : 'collapse-content'}
        style={{height: toggle ? `${heightEl}`: `0px`}}>
          <p aria-hidden={toggle ? 'true' : 'false'}>{props.texte}</p>
        </div>
      </div>
  )
}
