import React from 'react'

import './Header.scss'
import Logo from '../Logo/Logo'

export default function Header() {
    return (
        <div className='banniere'>
            <Logo />

            {/* transformer par un composant Navigation ? */}
            <nav>
                <ul className='navigation'>
                    <li>Accueil</li>
                    <li>À propos</li>
                </ul>
            </nav>
        </div>
    )
}