import { Link } from 'react-router-dom'
import logo from '../assets/logo-flyart.png'
import Proptypes from 'prop-types'
import Nav from './nav'

export default function SiteHeader ({ person, occupation, institution }) {
  return (
    <header className="header">
      <Nav/>
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
  )
}

SiteHeader.propTypes = {
  person: Proptypes.string,
  occupation: Proptypes.string,
  institution: Proptypes.string
}
