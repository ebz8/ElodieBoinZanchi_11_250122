import { useEffect, useState } from 'react'

import './Home.scss'
import bannerImg from '../../assets/banniere-accueil.png'

import Loader from '../../components/Loader/Loader'
import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'

export default function Home() {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [housings, setHousings] = useState([])
    
    useEffect(() => {
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
        fetchData()
      }, [])

      return error ? <div>Erreur : {error.message}</div>
      : !isLoaded ? <Loader />
      : <div className='home'>
            <Banner img={bannerImg} alt="bannière" texte ="Chez vous, partout et ailleurs"/>
            <Gallery housings={housings}/>
        </div>
    
}