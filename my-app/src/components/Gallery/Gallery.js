import './Gallery.scss'

import Thumbnail from '../Thumbnail/Thumbnail'
import { useEffect, useState } from 'react'

import Loader from '../Loader/Loader'

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

      return error ? <div>Erreur : {error.message}</div>
      : !isLoaded ? <Loader />
      : <ul className='gallery'>
            {housings.map((housing, index) => {
                return <Thumbnail key={index} { ...housing}/>
            })}
        </ul>
    }