import Banner from '../Banner/Banner'

import bannerImg from '../../assets/banniere-apropos.png'
import "./About.scss"

export default function About() {
    return (
        <div className='about'>
            <Banner img={bannerImg} alt="bannière" />
        </div>
    )
}