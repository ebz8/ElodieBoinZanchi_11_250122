import './Footer.scss'
import { ReactComponent as Logo } from '../../assets/logo-white.svg'

import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <div className='footer'>
        <Link to="/">
                <Logo alt="Kasa" className="logo"/>
            </Link>
            <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
        </div>
    )
}