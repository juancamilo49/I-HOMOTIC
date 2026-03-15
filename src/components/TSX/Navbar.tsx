import { Link, useLocation } from 'react-router-dom'
import '../CSS/Navbar.css'
import '../../Styles/Global.css'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/proyectos', label: 'Proyectos' },
  { to: '/faq', label: 'Preguntas Frecuentes' },
  { to: '/blog', label: 'Blog' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">I-HOMOTIC</Link>
      </div>
      <ul className="navbar-links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={location.pathname === to ? 'active' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}