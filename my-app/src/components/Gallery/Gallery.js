import './Gallery.scss'

import Thumbnail from '../Thumbnail/Thumbnail'
import { useEffect, useState } from 'react'

export default function Gallery() {
    // fetching data
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [housings, setHousings] = useState([])
    
    const fetchData = () => {
        fetch('./data/data.json')
          .then(res => res.json())
          .then(
            (result) => {
                setIsLoaded(true)
                setHousings(result)
            },
            (error) => {
                setIsLoaded(true)
                setError(error)
            }
        )
    }

    useEffect(() => {
        fetchData()
      }, [])

    if (error) {
        // gestion des erreurs ici
        return <div>Erreur : {error.message}</div>  
    } else if (!isLoaded) {
        // insérer ici un loader
        return <div>Chargement...</div>
    }

    else {
        return (
            //   <div className='gallery'>
                  <ul className='gallery'>
                      {housings.map((housing) => {
                          return <Thumbnail { ...housing}/>
                      })}
                  </ul>
            //   </div>
          )
    }

}

    // const createHousing = housing => {
    //     return (
    //     <li key={housing.id}>
    //         <Link to={`/housing/${housing.id}`}>
    //             <img src={housing.pictures[0]} alt={housing.title} />
    //             <h3>{housing.title}</h3>                
    //         </Link>
    //     </li>
    //     )
    // }