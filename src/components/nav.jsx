import { useState } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  {
    page: 'Inicio',
    path: '/'
  },
  {
    page: 'Obras',
    path: '/obras'
  },
  {
    page: 'Logros',
    path: '/logros'
  },
  {
    page: 'Acerca de',
    path: '/acerca-de'
  }
]

export default function Nav () {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const handleToggle = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <nav className="nav">
      <ul className="nav__menu">
        {menuItems.map(({ page, path }) => (
          <li key={page}>
            <Link to={path}>{page}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleToggle} className={`toggle-menu ${isMenuActive ? 'menu-active' : ''}`} role="button">
        <div className="toggle-menu__bars"></div>
        <div className="toggle-menu__bars"></div>
        <div className="toggle-menu__bars"></div>
      </div>
    </nav>
  )
}
