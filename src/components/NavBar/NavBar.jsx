import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo-Kasa"></img>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navLink">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navLink">
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
