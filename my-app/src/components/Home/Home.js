import React from 'react'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/Gallery'

// import { Data } from '../../data/logements'

export default function Home() {
    return (
        <div className='home'>
            <p>test Home</p>
            <Banner img="../../assets/banniere-accueil.png" alt="bannière" texte ="Chez vous, partout et ailleurs" />
            <Gallery />
        </div>
    )
}