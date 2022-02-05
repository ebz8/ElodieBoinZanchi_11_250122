import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav>
    <ul className='navigation'>
        <li>
            <NavLink to="/" className={({ isActive }) => {
                return isActive ? "--actif" : ""
            }}>
                Accueil
            </NavLink>
        </li>
        <li>
        <NavLink to="/about" className={({ isActive }) => {
                return isActive ? "--actif" : ""
            }}>
                À propos
            </NavLink>
        </li>
    </ul>
    </nav>
  )
}
