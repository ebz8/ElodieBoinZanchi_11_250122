import React from 'react'

import './Header.scss'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <div className='banniere'>
            <Logo />
            <Navbar />
        </div>
    )
}