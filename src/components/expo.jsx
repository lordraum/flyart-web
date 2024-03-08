import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Expo ({ img, alt, title, description, link }) {
  return (
    <article className="expo">
      <img src={img} alt={alt} className="expo__img" />
      <div className="expo__info">
      <h3 className="expo__title"><Link to={link} className="expo__link">{title}</Link>
        </h3>
      <p className="expo__description">{description}</p>
      </div>
    </article>
  )
}

Expo.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string
}
