import Banner from '../../components/Banner/Banner'
import Gallery from '../../components/Gallery/Gallery'

import './Home.scss'
import bannerImg from '../../assets/banniere-accueil.png'

// import { Data } from '../../data/logements'

export default function Home() {
    return (
        <div className='home'>
            <Banner img={bannerImg} alt="bannière" texte ="Chez vous, partout et ailleurs" />
            <Gallery />
        </div>
    )
}