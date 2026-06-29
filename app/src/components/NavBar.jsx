import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', icon: '🏠', label: 'Domov' },
  { to: '/cvicenie', icon: '💪', label: 'Cvičenie' },
  { to: '/jedlo', icon: '🍽️', label: 'Jedlo' },
  { to: '/sport', icon: '🏃', label: 'Šport' },
  { to: '/kalendar', icon: '📅', label: 'Kalendár' },
]

export default function NavBar() {
  return (
    <nav className="nav-bar">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="nav-icon">{link.icon}</span>
          <span>{link.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
