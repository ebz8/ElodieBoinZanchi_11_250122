import { useState } from 'react'

import './Carousel.scss'
import BtnCarousel from './BtnCarousel'


export default function Carousel(props) {

  const [currentImg, setCurrentImg] = useState({
    index: 1
  })

  const nextImg = () => {
      // navigation dans les images suivante
    if (currentImg.index !== props.images.length) {
      setCurrentImg({index: currentImg.index +1})

      // si dernière image, retour au début
    } else if (currentImg.index === props.images.length){
      setCurrentImg({index: 1})
    }
  }

  const prevImg = () => {
    // navigation dans les images précédentes
    if (currentImg.index !== 1) {
      setCurrentImg({index: currentImg.index -1})
    // si première image, passer à la dernière
    } else if (currentImg.index === 1){
      setCurrentImg({index: props.images.length})
    }
  }

  if (props.images.length > 1) {
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
        
          <div className="carousel-controls">
            <BtnCarousel changeImg={prevImg} direction={"prev"}/>
            <BtnCarousel changeImg={nextImg} direction={"next"}/>
          </div>
  
        <span className="currentImgCount" tabIndex="0">{`${currentImg.index} / ${props.images.length}`}</span>
  
      </div>
    )
  } else {
    return (
      <div className="carousel" aria-label="carousel">
        <div className="medias">
              <img
                className="medias-item"
                src={props.images}
                alt={props.description}
              />
        </div>
      </div>
    )
  }
}
