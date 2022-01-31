import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './Housing.scss'
import Loader from '../../components/Loader/Loader'
import Carousel from '../../components/Carousel/Carousel'
import HousingInfos from '../../components/HousingInfos/HousingInfos'
import Collapse from '../../components/Collapse/Collapse'

export default function Housing() {
    // récupère l'id du logement en cours
    const params = useParams()
    const currentHousingId = params.id

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentHousing, setCurrentHousing] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch('../data/data.json')
            .then(res => res.json())
            .then(
                (result) => {
                    const findCurrentHousing = result.find(housing => housing.id === currentHousingId)
                    setCurrentHousing(findCurrentHousing)
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
        }
        fetchData()    
    }, [currentHousingId, setCurrentHousing])

    return error ? <div>Erreur : {error.message}</div>
    : !isLoaded ? <Loader />
    : <div className='housing'>
        <Carousel images={currentHousing.pictures} description={currentHousing.title}/>
        <HousingInfos {...currentHousing}/>
        <div className="collapses">
            <Collapse titre="Description" texte={currentHousing.description}/>
            <Collapse titre="Équipements" liste={currentHousing.equipments}/>
        </div>
    </div>;
}