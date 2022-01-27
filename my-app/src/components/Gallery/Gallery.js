import './Gallery.scss'
// remplacer par un fetch ? est-ce la bonne façon de récup. données json ?
import { housingData } from '../../assets/data/logements'
import Housing from '../Housing/Housing'

export default function Gallery() {

    // function createItem(item) {
    //     return (
    //     <li>{item.id}</li>
    //     )
    // }

  return (
        <div className='gallery'>
            <ul>
                {housingData.map((housing) => {
                   return <li key={housing.id}>logement n°{housing.id}</li>
                })}
            </ul>
        </div>
    )
}
