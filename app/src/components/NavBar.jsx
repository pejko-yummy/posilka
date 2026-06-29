import { NavLink } from 'react-router-dom'
import { Home, Dumbbell, Salad, Footprints, CalendarDays } from 'lucide-react'

const links = [
  { to: '/', icon: Home, label: 'Domov' },
  { to: '/cvicenie', icon: Dumbbell, label: 'Cvičenie' },
  { to: '/jedlo', icon: Salad, label: 'Jedlo' },
  { to: '/sport', icon: Footprints, label: 'Šport' },
  { to: '/kalendar', icon: CalendarDays, label: 'Kalendár' },
]

export default function NavBar() {
  return (
    <nav className="nav-bar">
      {links.map((link) => {
        const Icon = link.icon
        return (
          <NavLink
            key={link.to}
            to={link.to}
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <Icon className="nav-icon" size={20} strokeWidth={2.2} />
            <span>{link.label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}
