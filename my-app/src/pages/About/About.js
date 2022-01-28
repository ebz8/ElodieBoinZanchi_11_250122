import Banner from '../../components/Banner/Banner'

import bannerImg from '../../assets/banniere-apropos.png'
import "./About.scss"
import Collapse from '../../components/Collapse/Collapse'

export default function About() {
    return (
        <div className='about'>
            <Banner img={bannerImg} alt="bannière" />
            <Collapse
                titre="Fiabilité"
                texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
            />
        </div>
    )
}