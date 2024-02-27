import { Link } from 'react-router-dom'

export default function Header () {
  return <div className="header">
    <div className="nav">
      <ul className="nav__menu">
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/acerca-de'}>Acerca de</Link></li>
        <li><Link to={'/obras'}>Obras</Link></li>
        <li><Link to={'/logros'}>Logros</Link></li>
      </ul>
    </div>
  </div>
}
