import PropTypes from 'prop-types'

export default function Evento ({ img, alt, title, description, link }) {
  return (
    <article className="evento">
      <img src={img} alt={alt} className="evento__img" />
      <div className="evento__info">
      <h3 className="evento__title"><a href={link} className="evento__link">{title}</a>
        </h3>
      <p className="evento__description">{description}</p>
      </div>
    </article>
  )
}

Evento.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string
}
