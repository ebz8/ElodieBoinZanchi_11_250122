import React from 'react'

import Banner from '../Banner/Banner'

import bannerImg from '../../assets/banniere-apropos.png'


export default function About() {
    return (
        <div>
            <Banner img={bannerImg} alt="bannière" />
        </div>
    )
}