import React from 'react'

import './Footer.scss'


export default function Footer() {
    return (
        <div className='footer'>
            <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
        </div>
    )
}