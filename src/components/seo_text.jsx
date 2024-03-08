import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function SEOText ({ title, text, link }) {
  return (
    <section className="seo-text__box">
      <h2 className="seo-text__title">
        <Link to={link}>{title}</Link>
      </h2>
      <p className="seo-text__paragraph">{text}</p>
    </section>
  )
}

SEOText.propTypes = {
  title: Proptypes.string.isRequired,
  text: Proptypes.string.isRequired,
  link: Proptypes.string.isRequired
}
