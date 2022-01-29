import { useState } from 'react'

import './Caroussel.scss'
import BtnCaroussel from './BtnCaroussel'


export default function Caroussel(props) {

  const [currentImg, setCurrentImg] = useState({
    index: 1,
    inProgress: false
  })

  const nextImg = () => {
    if (currentImg.index !== props.images.length) {
      setCurrentImg({index: currentImg.index +1, inProgress: true})
    } else if (currentImg.index === props.images.length){
      setCurrentImg({index: 1, inProgress: true})
    }
  }

  const prevImg = () => {
    if (currentImg.index !== 1) {
      setCurrentImg({index: currentImg.index -1, inProgress: true})
    } else if (currentImg.index === 1){
      setCurrentImg({index: props.images.length, inProgress: true})
    }
  }

  return (
    <div className="caroussel">

      {/* boutons de contrôle du caroussel */}
      <BtnCaroussel changeImg={prevImg} direction={"prev"}/>
      <BtnCaroussel changeImg={nextImg} direction={"next"}/>

      {/* affichage des images */}
      <div className="medias">
        {props.images.map((currentImg, index)=> {
          return (
            <img key={index} aria-hidden={currentImg.index === index ? "false" : "true"} src={currentImg} alt={props.description} />
          )
        })}
      </div>

      {/* compteur central */}
      <span className="currentImgCount">{`${currentImg.index} / ${props.images.length}`}</span>

    </div>
  )
}
