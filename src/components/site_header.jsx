import { Link } from 'react-router-dom'
import logo from '../assets/logo-flyart.png'
import Proptypes from 'prop-types'
import Nav from './nav'

export default function SiteHeader ({ person, occupation, slogan }) {
  return (
    <header className="header">
      <Nav/>
      <article className="hero">
        <Link to={'/'}>
          <img className='hero__logo' src={logo} alt="logo flyart" />
        </Link>
        <div className='hero__info'>
        <h1 className='hero__title'>{person}</h1>
          <p className="hero__occupation">{occupation}</p>
          <p className="hero__slogan">{slogan}</p>
        </div>
      </article>
    </header>
  )
}

SiteHeader.propTypes = {
  person: Proptypes.string,
  occupation: Proptypes.string,
  slogan: Proptypes.string
}
