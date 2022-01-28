import './Gallery.scss'
// remplacer par un fetch ? est-ce la bonne façon de récup. données json ?
import { housingData } from '../../assets/data/logements'
import Housing from '../../pages/Housing/Housing'
import { Link } from 'react-router-dom'
import Thumbnail from '../Thumbnail/Thumbnail'

export default function Gallery() {

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

    return (
        //   <div className='gallery'>
              <ul className='gallery'>
                  {housingData.map((housing) => {
                      return <Thumbnail
                                key={housing.id}
                                id={housing.id}
                                img={housing.pictures[0]}
                                titre={housing.title}
                            />
                  })}
              </ul>
        //   </div>
      )
}
