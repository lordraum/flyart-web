import { Link } from 'react-router-dom'
import logo from '../assets/logo-flyart-100-px.png'
import Proptypes from 'prop-types'

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

export default function SiteHeader ({ person, occupation, institution }) {
  return <header className="header">
    <nav className="nav">
      <ul className="nav__menu">
        {
          menuItems.map(({ page, path }) =>
            <Link key={page} to={path}>{page}</Link>
          )
        }
      </ul>
    </nav>
    <article className="hero">
      <Link to={'/'}>
        <img className='hero__logo' src={logo} alt="logo flyart" />
      </Link>
      <section className='hero__info'>
      <h1>{person}</h1>
        <p className="occupation">{occupation}</p>
        <p className="institution">{institution}</p>
      </section>
    </article>
  </header>
}

SiteHeader.propTypes = {
  person: Proptypes.string,
  occupation: Proptypes.string,
  institution: Proptypes.string
}
