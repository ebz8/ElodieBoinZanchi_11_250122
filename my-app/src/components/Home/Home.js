import React from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'

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