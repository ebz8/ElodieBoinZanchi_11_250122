import { useState } from 'react'

import './Carousel.scss'
import BtnCarousel from './BtnCarousel'


export default function Carousel(props) {

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
    <div className="Carousel">

      {/* boutons de contrôle du Carousel */}
      <BtnCarousel changeImg={prevImg} direction={"prev"}/>
      <BtnCarousel changeImg={nextImg} direction={"next"}/>

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
