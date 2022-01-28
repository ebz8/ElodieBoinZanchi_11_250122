import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Housing(props) {
    // récupère l'id du logement en cours
    const params = useParams()
    const currentHousingId = params.id
    // récupère les données du json et le logement en cours
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentHousing, setCurrentHousing] = useState([])

    const fetchData = () => {
        fetch('../data/data.json')
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true)
                const searchCurrentHousing = result.find(housing => housing.id === currentHousingId)
                setCurrentHousing(searchCurrentHousing)
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
        return <div>Erreur : {error.message}</div>  
    }
    else if (!isLoaded) {
        return <div>Chargement...</div>
    }
    else {
        return (
            <div>
                <p>bienvenue dans ce {currentHousing.title}</p>
            </div>
        )
    }
}