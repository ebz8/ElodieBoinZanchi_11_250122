import { useState } from 'react'

import './Carousel.scss'
import BtnCarousel from './BtnCarousel'


export default function Carousel(props) {

  const [currentImg, setCurrentImg] = useState({
    index: 1,
    navigating: false
  })

  const nextImg = () => {
    // si je n'ai pas atteint le dernier slide
    if (currentImg.index !== props.images.length) {
      setCurrentImg({index: currentImg.index +1, navigating: true})
    } else if (currentImg.index === props.images.length){
      setCurrentImg({index: 1, navigating: true})
    }
  }

  const prevImg = () => {
    if (currentImg.index !== 1) {
      setCurrentImg({index: currentImg.index -1, navigating: true})
    } else if (currentImg.index === 1){
      setCurrentImg({index: props.images.length, navigating: true})
    }
  }

  return (
    <div className="carousel" aria-label="carousel">

      {/* affichage des images */}
      <div className="medias">
        {props.images.map((item, index)=> {
          return (
            <img
              key={item}
              aria-hidden={currentImg.index === index +1 ? "false" : "true"}
              className="medias-item"
              src={item}
              alt={props.description}
              aria-label={`${currentImg.index} / ${props.images.length}`}
            />
          )
        })}
      </div>

      {/* boutons de contrôle du Carousel */}
      <BtnCarousel changeImg={prevImg} direction={"prev"}/>
      <BtnCarousel changeImg={nextImg} direction={"next"}/>
      {/* compteur central */}
      <span className="currentImgCount" tabIndex="0">{`${currentImg.index} / ${props.images.length}`}</span>

    </div>
  )
}
