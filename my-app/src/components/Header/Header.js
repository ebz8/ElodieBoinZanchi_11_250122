import './Header.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import Navbar from '../Navbar/Navbar'

import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <Logo alt="Kasa" className="logo"/>
            </Link>
            <Navbar />
        </div>
    )
}
